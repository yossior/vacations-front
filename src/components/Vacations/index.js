import React, { Component } from "react";
import VacationContainer from "../../containers/VacationContainer";
import { Row } from "reactstrap";

class Vacations extends Component {
  render() {
    return (
      <div>
        <Row>
          {this.props.vacations.map((v, key) => (
            <VacationContainer vac={v} vacKey = {key}/>
          ))}
        </Row>
      </div>
    );
  }
}

export default Vacations;
