import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge} from 'reactstrap';
  

class Last20 extends Component {

  render() {
    return (
        <div>
        <p>Last 20</p>
        <Badge pill color="danger">1</Badge>
        <Badge pill color="info">6</Badge>
        <Badge pill color="success">00</Badge>
        <Badge pill color="danger" styleName="{size:32pt;}">32</Badge>
        <Badge pill color="danger" styleName="{size:32pt;}">36</Badge>
        <Badge pill color="danger">1</Badge>
        <Badge pill color="info">6</Badge>
        <Badge pill color="success">00</Badge>
        <Badge pill color="danger" styleName="{size:32pt;}">32</Badge>
        <Badge pill color="danger" styleName="{size:32pt;}">36</Badge>
        <Badge pill color="danger">1</Badge>
        <Badge pill color="info">6</Badge>
        <Badge pill color="success">00</Badge>
        <Badge pill color="danger" styleName="{size:32pt;}">32</Badge>
        <Badge pill color="danger" styleName="{size:32pt;}">36</Badge>
        </div>
    );
  }
}

export default Last20;
