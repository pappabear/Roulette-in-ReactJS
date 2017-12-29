import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
  Badge, Row, Col, Progress, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, 
  Card, CardHeader, CardBody, CardFooter, CardTitle,
  Button, ButtonToolbar, ButtonGroup, ButtonDropdown, Label, Input, Table, 
  Modal, ModalHeader, ModalBody, ModalFooter, NavLink
} from 'reactstrap';
import Last20 from "./Last20.js";
import Pocket from "./Pocket.js";
import BettingLayout from "./BettingLayout.js";
import Balance from "./Balance.js";
import {BETS, WHEEL, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "./Constants.js";

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

class GameTable extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };

  }


  toggle() 
  {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {

    console.log("Balance=" + this.props.balance);
    console.log("Number of bets=" + this.props.last20.length);

    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Last20 last20={this.props.last20}/>
          </Col>
        </Row>

        <Row>
          <Col xs="3" md="3" xl="3">
            <Pocket numberSpun={this.props.numberSpun}/>
            <Balance balance={this.props.balance}/>
          </Col>
          <Col xs="9" md="9" xl="9">
            <BettingLayout winningBets={this.props.winningBets}
                           registerMyBet={this.props.registerMyBet}
                           myBetsTotal={this.props.myBetsTotal}
                           clearAllBets={this.props.clearAllBets}
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
                            onClick={this.props.spin}
                            >
                          Spin!</Button>
                    </p>
                </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.props.broke} 
                       className={'modal-danger ' + this.props.className}>
                  <ModalHeader>Game Over</ModalHeader>
                  <ModalBody>
                    Your balance has gone to $0.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" href="/" >Start New Game</Button>{' '}
                  </ModalFooter>
                </Modal>

      </div>
    )
  }
}

export default GameTable;
