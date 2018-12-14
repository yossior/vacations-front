import React, { Component } from "react";
import Vacation from "../../components/Vacation";

export default class VacationContainer extends Component {
  render() {
    return <Vacation vac={this.props.vac} />;
  }
}
