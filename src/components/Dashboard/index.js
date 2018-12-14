import React, { Component } from 'react';
import { Table } from "reactstrap";
import { Edit, DeleteRounded } from '@material-ui/icons';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Location</th>
            <th>Picture</th>
            <th>Price</th>
            <th>description</th>
            <th>Start</th>
            <th>End</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {this.props.vacs.map((vac, counter) => {
            return <tr>
            <th scope="row">{counter + 1}</th>
            <td>{vac.location}</td>
            <td>{vac.picture}</td>
            <td>{vac.price}</td>
            <td>{vac.description}</td>
            <td>{vac.startDate}</td>
            <td>{vac.endDate}</td>
            <td><button><Edit /></button> <button><DeleteRounded /></button></td>
          </tr>
          })}
          
        </tbody>
      </Table>
      </div>
    )
  }
}
