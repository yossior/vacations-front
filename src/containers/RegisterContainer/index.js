import React, { Component } from "react";
import Register from "../../components/Register";

class RegisterContainer extends Component {

  checkUsername(username) {
    fetch(`http://localhost:3000/users/check/${username}`)
    .then(response => { 
      if(response.status === 200){
        console.log("ok!");
      } else if(response.status === 409){
        console.log("o-o 409")
      }
     }
    )
  }
  render() {
    return (
      <div>
        <Register register={this.register.bind(this)} checkUsername={this.checkUsername} />
      </div>
    );
  }
  register(user) {
    this.checkUsername(user.username)
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
