import React, { Component } from "react";
import { Jumbotron, Button, Input, Row, Col, Form, FormGroup, FormFeedback } from "reactstrap";
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
              <Form onSubmit={this.props.login}>
                <FormGroup>
                  <Input required type="text" placeholder="Username" onChange={this.props.handleChange} name="username" />
                </FormGroup>
                <FormGroup>
                  <Input required type="password" placeholder="Password" onChange={this.props.handleChange} name="password" />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" color="primary" >Log-in</Button>
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
