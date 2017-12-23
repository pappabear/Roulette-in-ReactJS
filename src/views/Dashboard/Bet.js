import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge, Card, CardBody, CardHeader, Button} from 'reactstrap';
import {POCKETS, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "./Constants.js";  

class Bet extends Component {

    constructor(props) {
        super(props);
        this.renderWinningBets = this.renderWinningBets.bind(this);
      }

    renderWinningBets()
    {
        return this.props.winningBets.map((o, i) =>
            <li key={i}>{o}</li>
        )
  
    }

  render() {

    var results='';
    for (var i=0; i<this.props.winningBets.length; i++)
        results += this.props.winningBets + "<br />";

    return (
        <Card>
            <CardHeader>
                Place Your Bet
            </CardHeader>
            <CardBody>
                Winning bets:
                <ul>
                    {this.renderWinningBets()}
                </ul>
            </CardBody>
        </Card>
    );
  }
}

export default Bet;
