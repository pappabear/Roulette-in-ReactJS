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
import BettingLayout from "./BettingLayout.js";
import Balance from "./Balance.js";
import {WHEEL, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "./Constants.js";

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

class GameTable extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.spin = this.spin.bind(this);
    this.registerMyBet = this.registerMyBet.bind(this);
    this.state = {
      dropdownOpen: false,
      numberSpun: '',
      last20: [],
      winningBets: [],
      myBets: [],
      balance: 200
    };
  }

  toggle() 
  {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  registerMyBet(bet, amount)
  {
    var m = this.state.myBets;
    var myBet = {bet: bet, amount: amount};
    m.push(myBet);
    console.log("Updated bet " + bet + " " + amount);
    console.log(m.length + " total bets");
    this.setState({
      myBets: m
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
      w.push(WHEEL[n].toString());
      if (FIRST12.includes(WHEEL[n]))
        w.push("FIRST12");
      if (SECOND12.includes(WHEEL[n]))
        w.push("SECOND12");
      if (THIRD12.includes(WHEEL[n]))
        w.push("THIRD12");
      if (ODD.includes(WHEEL[n]))
        w.push("ODD");
      if (EVEN.includes(WHEEL[n]))
        w.push("EVEN");
      if (RED.includes(WHEEL[n]))
        w.push("RED");
      if (BLACK.includes(WHEEL[n]))
        w.push("BLACK");
      if (FIRSTAVENUE.includes(WHEEL[n]))
        w.push("FIRSTAVENUE");
      if (SECONDAVENUE.includes(WHEEL[n]))
        w.push("SECONDAVENUE");
      if (THIRDAVENUE.includes(WHEEL[n]))
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
          <Col xs="6" md="6" xl="6">
            <BettingLayout winningBets={this.state.winningBets}
                           registerMyBet={this.registerMyBet}
                 />
          </Col>
          <Col xs="3" md="3" xl="3">
            <Balance balance={this.state.balance}/>
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

export default GameTable;
