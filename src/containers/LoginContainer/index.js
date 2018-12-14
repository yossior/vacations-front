import React, { Component } from "react";
import Login from "../../components/Login";
class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Login
          login={this.login.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }

  login() {
    debugger
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state),
      credentials: 'include'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        debugger;
      });
  }
  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }
}
export default LoginContainer;
