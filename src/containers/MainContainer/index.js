import React, { Component } from "react";
import HeaderContainer from "../HeaderContainer";
import { getVacations } from '../../actions';
import { connect } from 'react-redux';

class MainContainer extends Component {

  componentDidMount() {
    this.props._getVacations();
  }

  render() {
    return <HeaderContainer />;
  }
}

const mapDispatchTOProps = dispatch => {
  return { _getVacations: () => dispatch(getVacations())}
}

export default connect(null, mapDispatchTOProps)(MainContainer);
