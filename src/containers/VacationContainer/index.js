import React, { Component } from "react";
import Vacation from "../../components/Vacation";
import { getVacations } from '../../actions';
import { connect } from 'react-redux';

class VacationContainer extends Component {

  hover(e){
    e.target.textContent = this.props.vac.follows === 0 ?  'Follow' : 'Unfollow';
  }
  hoverOut(e){
    e.target.textContent = this.props.vac.follows === 0 ? 'Follow' : 'Following';
  }

  following(){
    debugger
      fetch(`http://localhost:3000/${this.props.vac.follows === 0 ?  'follow' : 'unfollow'}/${this.props.vac.id}`, {
        method: "POST",
        credentials: 'include'
      })
      .then(() => this.props._getVacations())
  }

  render() {
    return <Vacation vac={this.props.vac} hover={this.hover.bind(this)} hoverOut={this.hoverOut.bind(this)} vacKey={this.props.vacKey} following={this.following.bind(this)}/>;
  }
}

const mapDispatchTOProps = dispatch => {
  return { _getVacations: () => dispatch(getVacations()) }
}

export default connect(null, mapDispatchTOProps)(VacationContainer);