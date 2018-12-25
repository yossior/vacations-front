import React, { Component } from "react";
import Login from "../../components/Login";
import history from '../../history';
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    if (document.cookie.indexOf('token') !== -1) {
      if (document.cookie.isAdmin)
        history.push('dashboard');
      else {
        history.push('vacations');
      }
    }
  }
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

  login(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state),
      credentials: 'include'
    })
      .then(response => {debugger; 
        if(response.status === 403)
        alert('Wrong username or password');
        return response.json()})
      .then(dataIsAdmin => {
        debugger
        if (dataIsAdmin)
          history.push('dashboard');
        else {
          history.push('vacations');
        }
      })
      .catch(err => {
      });
  }
  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }
}
export default LoginContainer;