import React, { Component } from "react";
import HeaderContainer from "../HeaderContainer";
import { getVacations, updateVacations } from '../../actions';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import history from '../../history';
const socket = openSocket('http://localhost:3008');

class MainContainer extends Component {

  constructor(){
    super();
    socket.on('VACS_UPDATE', () => {debugger; this.props._getVacations()});
  }

  componentDidMount() {
    if(document.cookie.indexOf('token') !== -1)
    this.props._getVacations();
    else history.push('login');
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
