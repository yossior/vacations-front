import React, { Component } from "react";
import { Jumbotron, Button, Input, Row, Col } from "reactstrap";

class Register extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg="3">
            <Jumbotron className="display-6">
              <h3 className="display-6">Sign up</h3>
              <hr className="my-2" />
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
              <Input type="text" placeholder="Username" />
              <Input type="password" placeholder="Password" />
              <Button color="primary">Register</Button>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Register;
