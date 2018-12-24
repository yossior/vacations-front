import React, { Component } from "react";
import { Jumbotron, Button, Input, Row, Col, Form, FormGroup } from "reactstrap";

class Register extends Component {
  
  render() {
    return (
      <div>
        <Row>
          <Col lg="3">
            <Jumbotron className="display-6">
              <h3 className="display-6">Sign up</h3>
              <hr className="my-2" />
              <Form onSubmit={this.props.register}>
                <FormGroup row>
                  <Input required type="text" placeholder="First Name" name="firstName" onChange={this.props.handleChange} />
                </FormGroup>
                <FormGroup row>
                  <Input required type="text" placeholder="Last Name" name="lastName" onChange={this.props.handleChange} />
                </FormGroup>
                <FormGroup row>
                  <Input required type="text" placeholder="Username" name="username" onChange={this.props.handleChange}/>
                </FormGroup>
                <FormGroup row>
                  <Input required type="text" placeholder="Password" name="password" onChange={this.props.handleChange} />
                </FormGroup>
                <FormGroup row>
                  <Button color="primary" type="submit">Register</Button>
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
