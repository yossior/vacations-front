import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard';
import { connect } from 'react-redux';

class DashboardContainer extends Component {
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
export default connect(mapStateToProps)(DashboardContainer);