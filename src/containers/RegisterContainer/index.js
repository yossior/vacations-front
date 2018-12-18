import React, { Component } from "react";
import Register from "../../components/Register";

class RegisterContainer extends Component {
  render() {
    return (
      <div>
        <Register register = {this.register}/>
      </div>
    );
  }
  register(user){
    debugger
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(user),
      credentials: 'include'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
      });
  }
}


export default RegisterContainer;
