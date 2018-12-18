import React, { Component } from "react";
import { Jumbotron, Button, Input, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg="3">
            <Jumbotron className="display-6">
              <h3 className="display-6">Login</h3>
              <hr className="my-2" />
              <Form>
                <FormGroup>
                  <Input type="text" placeholder="Username" onChange={this.props.handleChange} name="user" />
                </FormGroup>
                <FormGroup>
                  <Input type="password" placeholder="Password" onChange={this.props.handleChange} name="password" />
                </FormGroup>
                <FormGroup>
                  <Button color="primary" onClick={this.props.login}>Log-in</Button>
                </FormGroup>
                <p>Don't have an account? <Link className="link" to="register">Sign up</Link></p>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Login;
