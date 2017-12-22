import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from 'reactstrap';
import Last20 from "./Last20.js";
import Pocket from "./Pocket.js";
import Bet from "./Bet.js";
import {POCKETS, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "./Constants.js";

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.spin = this.spin.bind(this);
    this.state = {
      dropdownOpen: false,
      numberSpun: '',
      last20: []
    };
  }

  toggle() 
  {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  spin() 
  {
    console.log("User cliked SPIN");
    var n = Math.floor(Math.random() * 38);
    var l = this.state.last20;
    l.push(n);
    this.setState({
      numberSpun: n,
      last20: l
    });
  }


  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Last20 last20={this.state.last20}/>
          </Col>
        </Row>

        <br />

        <Row>
          <Col xs="3" md="3" xl="3">
            <Pocket numberSpun={this.state.numberSpun}/>
          </Col>
          <Col xs="9" md="9" xl="9">
            <Bet/>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="12" xl="12">
            <Card>
                <CardBody>
                    <p>
                    <Button outline 
                            color="primary" 
                            block
                            onClick={this.spin}
                            >
                          Spin!</Button>
                    </p>
                </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

export default Dashboard;
