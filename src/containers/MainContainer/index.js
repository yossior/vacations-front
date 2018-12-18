import React, { Component } from "react";
import HeaderContainer from "../HeaderContainer";
import { getVacations, updateVacations } from '../../actions';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3008');

class MainContainer extends Component {

  constructor(){
    super();
    socket.on('VACS_UPDATE', data => {debugger; this.props._updateVacs(data)});
  }

  componentDidMount() {
    this.props._getVacations();
  }

  render() {
    return <HeaderContainer />;
  }
}

const mapStateToProps = state => {
  return { vacations: state.vacationsReducer.vacations }
}
const mapDispatchTOProps = dispatch => {
  return { _getVacations: () => dispatch(getVacations()), _updateVacs: (vacs) => dispatch(updateVacations(vacs)) }
}
export default connect(mapStateToProps, mapDispatchTOProps)(MainContainer);
