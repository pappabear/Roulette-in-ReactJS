import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge, Card, CardBody, CardHeader} from 'reactstrap';
import {WHEEL, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "./Constants.js";  

class Balance extends Component {

    constructor(props) {
        super(props);
      }


    render() {

        return (

            <Card>
            <CardHeader>
                Balance
            </CardHeader>
            <CardBody>
                <h1>$ {this.props.balance}</h1>
            </CardBody>
            </Card>
        );
    }
}

export default Balance;
