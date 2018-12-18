import React, { Component } from "react";
import { Jumbotron, Button, Input, Row, Col, Form, FormGroup } from "reactstrap";

class Register extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div>
        <Row>
          <Col lg="3">
            <Jumbotron className="display-6">
              <h3 className="display-6">Sign up</h3>
              <hr className="my-2" />
              <Form >
                <FormGroup row>
                  <Input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup row>
                  <Input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup row>
                  <Input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup row>
                  <Input type="text" placeholder="Password" name="password" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup row>
                  <Button color="primary" onClick={this.props.register.bind(null, this.state)}>Register</Button>
                </FormGroup>

              </Form>

            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Register;
