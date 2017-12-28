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
        if (parseInt(e.target.value) >= 0)
        {
            console.log("e.target=" + e.target.name + " " + e.target.value);
            this.props.registerMyBet(e.target.name, parseInt(e.target.value));
        }
    }


  render() {

    var style0 = {
        textAlign: 'center',
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 'bold'
        };
    var styleRed = {
        textAlign: 'center',
        backgroundColor: 'red',
        color: 'white',
        fontWeight: 'bold'
        };
    var styleBlack = {
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold'
        };
            
    return (
        <Card>
            <CardHeader>
                Place Your Bets
            </CardHeader>
            <CardBody>
                <Row>
                    <Col xs="12" md="12" xl="12">
                        <Row>
                        <Col xs="6" md="6" xl="6">
                            Your bet(s) this round:
                            <h3>$ {this.props.myBetsTotal}</h3>
                        </Col>
                        <Col xs="6" md="6" xl="6">
                            <Button outline 
                                color="primary" 
                                onClick={this.props.clearAllBets}
                                >
                            Clear all bets</Button>
                        </Col>
                        </Row>

                        <table width="100%" border="0" cellPadding="5x">
                            <tbody>

                            <tr>
                                <td style={style0}>00
                                    <Input id='00' name='00' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>3
                                    <Input id='3' name='3' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>6
                                    <Input id='6' name='6' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>9
                                    <Input id='9' name='9' onBlur={this.handleBlur} size="1" type="text" />
                                </td>                                    
                                <td style={styleRed}>12
                                    <Input id='12' name='12' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>15
                                <Input id='15' name='15' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>18
                                    <Input id='18' name='18' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>21
                                    <Input id='21' name='21' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>24
                                    <Input id='24' name='24' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>27
                                    <Input id='27' name='27' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>30
                                    <Input id='30' name='30' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>33
                                    <Input id='33' name='33' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>36
                                    <Input id='36' name='36' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={style0}>2to1
                                    <Input id='FIRSTAVENUE' name='FIRSTAVENUE' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                            </tr>

                            <tr>
                                <td style={style0}>0
                                    <Input id='0' name='0' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>2
                                    <Input id='2' name='2' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>5
                                    <Input id='5' name='5' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>8
                                    <Input id='8' name='8' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>11
                                    <Input id='11' name='11' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>14
                                    <Input id='14' name='14' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>17
                                    <Input id='17' name='17' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>20
                                    <Input id='20' name='20' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>23
                                    <Input id='23' name='23' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>26
                                    <Input id='26' name='26' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>29
                                    <Input id='29' name='29' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>32
                                    <Input id='32' name='32' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>35
                                    <Input id='35' name='35' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={style0}>2to1
                                    <Input id='SECONDAVENUE' name='SECONDAVENUE' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                </td>
                                <td style={styleRed}>1
                                    <Input id='1' name='1' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>4
                                    <Input id='4' name='4' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>7
                                    <Input id='7' name='7' onBlur={this.handleBlur} size="1" type="text" />
                                </td>                                    
                                <td style={styleBlack}>10
                                    <Input id='10' name='10' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>13
                                <Input id='13' name='13' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>16
                                    <Input id='16' name='16' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>19
                                    <Input id='19' name='19' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>22
                                    <Input id='22' name='22' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>25
                                    <Input id='25' name='25' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>28
                                    <Input id='28' name='28' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack}>31
                                    <Input id='31' name='31' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed}>34
                                    <Input id='34' name='34' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={style0}>2to1
                                    <Input id='THIRDAVENUE' name='THIRDAVENUE' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                </td>
                                <td style={style0} colSpan="4">1st 12
                                    <Input id='FIRST12' name='FIRST12' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={style0} colSpan="4">2nd 12
                                    <Input id='SECOND12' name='SECOND12' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={style0} colSpan="4">3rd 12
                                    <Input id='THIRD12' name='THIRD12' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                </td>
                                <td style={style0} colSpan="2">1-18
                                    <Input id='FIRST18' name='FIRST18' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={style0} colSpan="2">EVEN
                                    <Input id='EVEN' name='EVEN' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleRed} colSpan="2">RED
                                    <Input id='RED' name='RED' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={styleBlack} colSpan="2">BLACK
                                    <Input id='BLACK' name='BLACK' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={style0} colSpan="2">ODD
                                    <Input id='ODD' name='ODD' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td style={style0} colSpan="2">19-36
                                    <Input id='LAST18' name='LAST18' onBlur={this.handleBlur} size="1" type="text" />
                                </td>
                                <td>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
  }
}

export default BettingLayout;
