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
      last20: [],
      winningBets: [],
      balance: 200
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
      //console.log("User cliked SPIN");
      
      // set the winning number
      var n = Math.floor(Math.random() * 38);

      // add it to the last20 list
      var l = this.state.last20;
      l.push(n);

      // determine what all the winning bets were based on the pocketed number
      var w = [];
      w.push(POCKETS[n].toString());
      if (FIRST12.includes(POCKETS[n]))
        w.push("FIRST12");
      if (SECOND12.includes(POCKETS[n]))
        w.push("SECOND12");
      if (THIRD12.includes(POCKETS[n]))
        w.push("THIRD12");
      if (ODD.includes(POCKETS[n]))
        w.push("ODD");
      if (EVEN.includes(POCKETS[n]))
        w.push("EVEN");
      if (RED.includes(POCKETS[n]))
        w.push("RED");
      if (BLACK.includes(POCKETS[n]))
        w.push("BLACK");
      if (FIRSTAVENUE.includes(POCKETS[n]))
        w.push("FIRSTAVENUE");
      if (SECONDAVENUE.includes(POCKETS[n]))
        w.push("SECONDAVENUE");
      if (THIRDAVENUE.includes(POCKETS[n]))
        w.push("THIRDAVENUE");

    //update the state so it can propogate to the rest of the app
    this.setState({
      numberSpun: n,
      last20: l,
      winningBets: w
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
            <Bet winningBets={this.state.winningBets}
                 balance={this.state.balance}
                 />
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
