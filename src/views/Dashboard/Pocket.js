import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge, Card, CardBody, CardHeader} from 'reactstrap';
import {WHEEL, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "./Constants.js";

var wheelStyle = {
    fontSize: '80px'
    };

var color = '';
    
    

class Pocket extends Component {
    
  render() {

    if (COLORS[this.props.numberSpun] === "RED")
        color = "danger";
    if (COLORS[this.props.numberSpun] === "BLACK")
        color = "secondary";
    if (COLORS[this.props.numberSpun] === "GREEN")
        color = "success";

    return (
        <Card>
            <CardHeader>
                Pocket
            </CardHeader>
            <CardBody>
                <Badge pill color={color} style={wheelStyle}>{WHEEL[this.props.numberSpun]}</Badge>
            </CardBody>
        </Card>
    );
  }
}

export default Pocket;
