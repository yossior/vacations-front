import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard';
import { connect } from 'react-redux';
import { getVacations } from '../../actions';

class DashboardContainer extends Component {

  componentWillMount(){
    this.props._getVacations();
  }

  render() {
    return (
      <div>
        <Dashboard vacs={this.props.vacations}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { vacations: state.vacationsReducer.vacations }
}

const mapDispatchTOProps = dispatch => {
  return { _getVacations: () => dispatch(getVacations()) }
}

export default connect(mapStateToProps, mapDispatchTOProps)(DashboardContainer);