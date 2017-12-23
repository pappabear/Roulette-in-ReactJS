import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
    Table,
    Form,
    FormGroup,
    FormText,
    InputGroup,
    InputGroupAddon,
    InputGroupButton
  } from 'reactstrap';  
import {WINNERS, POCKETS, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "./Constants.js";  

class Bet extends Component {

    constructor(props) {
        super(props);
        this.renderWinningBets = this.renderWinningBets.bind(this);
        this.renderMyBets = this.renderMyBets.bind(this);
      }

    renderWinningBets()
    {
        return this.props.winningBets.map((o, i) =>
            <li key={i}>{o}</li>
        )
  
    }

    renderMyBets()
    {
        return WINNERS.map((o, i) =>
            <FormGroup key={i}>
                <div className="controls">
                    <InputGroup className="input-prepend">
                        <InputGroupAddon>{o}</InputGroupAddon>
                        <Input id="{o}" size="2" type="text"/>
                    </InputGroup>
                </div>
            </FormGroup>
        )
    }


  render() {

    var results='';
    for (var i=0; i<this.props.winningBets.length; i++)
        results += this.props.winningBets + "<br />";

    return (
        <Card>
            <CardHeader>
                Place Your Bets
            </CardHeader>
            <CardBody>
                <Row>
                    <Col xs="3" md="3" xl="3">
                        Winning bets:
                        <ul>
                            {this.renderWinningBets()}
                        </ul>
                    </Col>
                    <Col xs="4" md="4" xl="4">
                        Your bets:
                        <p></p>
                        <Form action="" method="post" className="form-horizontal">
                            {this.renderMyBets()}
                        </Form>

                    </Col>
                    <Col xs="5" md="5" xl="5">
                        Balance:
                        <h1>$ {this.props.balance}</h1>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
  }
}

export default Bet;
