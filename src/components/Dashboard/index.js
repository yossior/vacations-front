import React, { Component } from 'react';
import dateFormat from '../../dateFormat'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input } from "reactstrap";

import { Edit, DeleteRounded } from '@material-ui/icons';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      edited: { location: '', startDate: '', endDate: '', picture: '', description: '' }
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendEdited = this.sendEdited.bind(this);
  }

  toggle() {
    //todo: handle state vars on modal closing
    this.setState({
      modal: !this.state.modal
    });
  }

  editVac(key) {
    this.setState({ ...this.state, modal: true, editedID: key, action:'edit', edited: { ...this.props.vacs[key], startDate: dateFormat(this.props.vacs[key].startDate), endDate: dateFormat(this.props.vacs[key].endDate) } });
  }

  addVac() {
    this.setState({ ...this.state, modal: true, action: 'add' });
  }

  handleChange(e) {
    this.setState({ ...this.state, edited: { ...this.state.edited, [e.target.name]: e.target.value } });
  }

  handlePic(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.files[0] });
  }

  sendEdited() {

    switch (this.state.action) {
      case "edit":
        fetch(`http://localhost:3000/admin/${this.state.edited.id}`, {
          method: 'PUT',
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        break;

      case "add":
      debugger;
      fetch(`http://localhost:3000/admin/`, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
    }
    this.toggle();
  }

  delete(key) {
    fetch(`http://localhost:3000/admin/${this.props.vacs[key].id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.action} Vacation</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="location" sm={2}>Location</Label>
                <Col sm={10}>
                  <Input type="text" name="location" id="location" onChange={this.handleChange} value={this.state.edited.location} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="startDate" sm={2}>Start Date</Label>
                <Col sm={10}>
                  <Input type="date" name="startDate" id="startDate" onChange={this.handleChange} value={this.state.edited.startDate} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="price" sm={2}>Price</Label>
                <Col sm={10}>
                  <Input type="number" name="price" id="price" onChange={this.handleChange} value={this.state.edited.price} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="endDate" sm={2}>End Date</Label>
                <Col sm={10}>
                  <Input type="date" name="endDate" id="endDate" onChange={this.handleChange} value={this.state.edited.endDate} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={2}>Description</Label>
                <Col sm={10}>
                  <Input type="textarea" name="description" id="description" onChange={this.handleChange} value={this.state.edited.description} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="pic" sm={2}>Picture</Label>
                <Col sm={10}>
                  <Input type="url" name="picture" id="picture" onChange={this.handleChange} placeholder="URL" value={this.state.edited.picture} />
                </Col>
              </FormGroup>

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.sendEdited}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Location</th>
              <th>Picture</th>
              <th>Price</th>
              <th>description</th>
              <th>Start</th>
              <th>End</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {this.props.vacs.map((vac, key) => {
              return <tr>
                <th scope="row">{key + 1}</th>
                <td>{vac.location}</td>
                <td>{vac.picture}</td>
                <td>{vac.price}</td>
                <td>{vac.description}</td>
                <td>{dateFormat(vac.startDate)}</td>
                <td>{dateFormat(vac.endDate)}</td>
                <td><button onClick={this.editVac.bind(this, key)}><Edit /></button> <button><DeleteRounded onClick={this.delete.bind(this, key)} /></button></td>
              </tr>
            })}

          </tbody>
        </Table>
        <Button name="addVac" onClick={this.addVac.bind(this)}>Add Vacation</Button>
      </div>
    )
  }
}
