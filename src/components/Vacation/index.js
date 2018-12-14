import React, { Component } from "react";
import { Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import dateFormat from '../../dateFormat';

export default class Vacation extends Component {
  render() {
    return (
      <Col lg="4">
        <div>
          <Card>
            <CardImg top width="100%" src={this.props.vac.picture} alt="Card image cap" />
            <CardBody>
              <CardTitle>{this.props.vac.location}</CardTitle>
              <CardSubtitle>{dateFormat(this.props.vac.startDate)} - {dateFormat(this.props.vac.endDate)}</CardSubtitle>
              <CardText>{this.props.vac.description}</CardText>
              <Button>Follow</Button>
            </CardBody>
          </Card>
        </div>
      </Col>
    );
  }
}
