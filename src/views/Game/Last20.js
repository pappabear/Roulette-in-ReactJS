import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge, Card, CardBody, CardHeader} from 'reactstrap';
import {WHEEL, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "./Constants.js";  

class Last20 extends Component {

    constructor(props) {
        super(props);
        this.renderLast20 = this.renderLast20.bind(this);
        this.getColor = this.getColor.bind(this);
      }


    getColor(o)
    {
        var color='success';
        if (COLORS[o] === "RED")
            color = "danger";
        if (COLORS[o] === "BLACK")
            color = "secondary";
        if (COLORS[o] === "GREEN")
            color = "success";
        return color;
    }

    renderLast20()
    {
        var s='';
        var color='';
        var o=[];

        //console.log("this.props.last20.length=" + this.props.last20.length);

        return this.props.last20.map((o, i) =>
            <Badge pill color={this.getColor(o)} key={i} >{WHEEL[o]}</Badge>
        )
  
    }


    render() {

        //console.log("this.props.last20.length=" + this.props.last20.length);
        return (

            <Card>
            <CardHeader>
                Last 20
            </CardHeader>
            <CardBody>
                {this.renderLast20()}
            </CardBody>
            </Card>
        );
    }
}

export default Last20;
