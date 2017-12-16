import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge, Card, CardBody, CardHeader} from 'reactstrap';

var pocketStyle = {
    fontSize: '80px'
    };

class Pocket extends Component {
      
  render() {
    return (
        <Card>
            <CardHeader>
                Pocket
            </CardHeader>
            <CardBody>
                <Badge pill color="danger" style={pocketStyle}>36</Badge>
            </CardBody>
        </Card>
    );
  }
}

export default Pocket;
