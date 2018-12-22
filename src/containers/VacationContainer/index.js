import React, { Component } from "react";
import Vacation from "../../components/Vacation";

export default class VacationContainer extends Component {

  hover(e){
    e.target.textContent = this.props.vac.follows === 0 ?  'Follow' : 'Unfollow';
  }
  hoverOut(e){
    
    e.target.textContent = this.props.vac.follows === 0 ? 'Follow' : 'Following';
  }

  render() {
    return <Vacation vac={this.props.vac} hover={this.hover.bind(this)} hoverOut={this.hoverOut.bind(this)} vacKey={this.props.vacKey}/>;
  }
}
