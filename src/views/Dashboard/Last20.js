import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge, Card, CardBody, CardHeader} from 'reactstrap';
  

class Last20 extends Component {

  render() {
    return (

        <Card>
        <CardHeader>
            Last 20
        </CardHeader>
        <CardBody>
            <Badge pill color="danger">1</Badge>
            <Badge pill color="secondary">6</Badge>
            <Badge pill color="success">00</Badge>
            <Badge pill color="danger">32</Badge>
            <Badge pill color="danger">36</Badge>
            <Badge pill color="danger">1</Badge>
            <Badge pill color="secondary">6</Badge>
            <Badge pill color="success">00</Badge>
            <Badge pill color="danger">32</Badge>
            <Badge pill color="danger">36</Badge>
            <Badge pill color="danger">1</Badge>
            <Badge pill color="secondary">6</Badge>
            <Badge pill color="success">00</Badge>
            <Badge pill color="danger">32</Badge>
            <Badge pill color="danger">36</Badge>
            <Badge pill color="success">00</Badge>
            <Badge pill color="danger">32</Badge>
            <Badge pill color="danger">36</Badge>
            <Badge pill color="danger">1</Badge>
            <Badge pill color="secondary">6</Badge>
        </CardBody>
        </Card>
    );
  }
}

export default Last20;
