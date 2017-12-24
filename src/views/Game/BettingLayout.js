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
import {BETS, WHEEL, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "./Constants.js";  

class BettingLayout extends Component {

    constructor(props) {
        super(props);
        this.renderWinningBets = this.renderWinningBets.bind(this);
        this.renderMyBets = this.renderMyBets.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
      }

    renderWinningBets()
    {
        return this.props.winningBets.map((o, i) =>
            <li key={i}>{o}</li>
        )
  
    }

    handleBlur(e)
    {
        if (parseInt(e.target.value) > 0)
        {
            console.log("e.target=" + e.target.name + " " + e.target.value);
            this.props.registerMyBet(e.target.name, parseInt(e.target.value));
        }
    }

    renderMyBets()
    {
        return BETS.map((o, i) =>
            <FormGroup key={i}>
                <div className="controls">
                    <InputGroup className="input-prepend">
                        <InputGroupAddon>{o}</InputGroupAddon>
                        <Input id={o}
                               name={o}
                               onBlur={this.handleBlur} 
                               size="2" 
                               type="text"
                               />
                    </InputGroup>
                </div>
            </FormGroup>
        )
    }


  render() {

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
                    <Col xs="6" md="6" xl="6">
                        Your bet(s) this round:
                        <h3>$ {this.props.myBetsTotal}</h3>
                        <Form action="" method="post" className="form-horizontal">
                            {this.renderMyBets()}
                        </Form>

                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
  }
}

export default BettingLayout;
