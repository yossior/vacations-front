import React, { Component } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input } from "reactstrap";

import { Edit, DeleteRounded } from '@material-ui/icons';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePic = this.handlePic.bind(this);
    this.sendEdited = this.sendEdited.bind(this);
  }

  toggle() {
    //todo: handle state vars on modal closing
    this.setState({
      modal: !this.state.modal
    });
  }

  openModal(editedVac) {
    this.setState({
      modal: !this.state.modal, 'editedVac': editedVac
    });
  }

  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handlePic(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.files[0] });
  }

  sendEdited() {
    let formData = new URLSearchParams();
    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key])
    });

    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }

    fetch(`http://localhost:3000/admin/${this.state.editedVac}`, {
      method: 'PUT',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    this.toggle();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Vacation</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="location" sm={2}>Location</Label>
                <Col sm={10}>
                  <Input type="text" name="email" id="location" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="startDate" sm={2}>Start Date</Label>
                <Col sm={10}>
                  <Input type="date" name="startDate" id="startDate" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="endDate" sm={2}>End Date</Label>
                <Col sm={10}>
                  <Input type="date" name="endDate" id="endDate" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={2}>Description</Label>
                <Col sm={10}>
                  <Input type="text" name="description" id="description" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="pic" sm={2}>Password</Label>
                <Col sm={10}>
                  <input type="file" name="pic" id="pic" accept="image/*" onChange={this.handlePic} />
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
                <td>{vac.startDate}</td>
                <td>{vac.endDate}</td>
                <td><button onClick={this.openModal.bind(this, key)}><Edit /></button> <button><DeleteRounded /></button></td>
              </tr>
            })}

          </tbody>
        </Table>
      </div>
    )
  }
}
