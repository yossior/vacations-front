import React, { Component } from 'react'
import Vacations from '../../components/Vacations';
import { getVacations, updateVacations } from '../../actions';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3008');

class VacationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { vacations: [] };
  }

  componentDidMount() {
    this.props._getVacations();
    socket.on('VACS_UPDATE', data => {debugger; this.props._updateVacs(data)});
  }

  render() {
    return (
      <div>
        <Vacations vacations={this.props.vacations} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { vacations: state.vacationsReducer.vacations }
}
const mapDispatchTOProps = dispatch => {
  return { _getVacations: () => dispatch(getVacations()), _updateVacs: (vacs) => dispatch(updateVacations(vacs)) }
}

export default connect(mapStateToProps, mapDispatchTOProps)(VacationsContainer);