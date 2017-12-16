import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge, Card, CardBody, CardHeader, Button} from 'reactstrap';

class Bet extends Component {
      
  render() {
    return (
        <Card>
            <CardHeader>
                Place Your Bet
            </CardHeader>
            <CardBody>
                
                hello world

                <p>
                <Button outline color="primary" block>Spin!</Button>
                </p>
            </CardBody>
        </Card>
    );
  }
}

export default Bet;
