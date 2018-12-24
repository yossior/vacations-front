import React, { Component } from "react";
import Register from "../../components/Register";
import history from '../../history';

class RegisterContainer extends Component {

  async checkUsername(username) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/users/check/${username}`)
        .then(response => {
          if (response.status === 200) {
            console.log("ok!");
            resolve(true);
          } else if (response.status === 409) {
            console.log("o-o 409");
            alert("Username already exists");
            reject(false);
          }
        }
        )
    })

  }
  render() {
    return (
      <div>
        <Register register={this.register.bind(this)} checkUsername={this.checkUsername} handleChange={this.handleChange.bind(this)} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  register(e) {
    debugger;
    e.preventDefault();
    this.checkUsername(this.state.username).then(
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(this.state),
        credentials: 'include'
      })
        .then(response => {
          history.push('vacations');
        })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
        })
    )
  }
}
export default RegisterContainer;