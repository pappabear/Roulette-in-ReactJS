import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import GameTable from '../../views/Game/GameTable.js';
import {BETS, WHEEL, COLORS, FIRST12, SECOND12, THIRD12, ODD, EVEN, FIRST18, LAST18, RED, BLACK, FIRSTAVENUE, SECONDAVENUE, THIRDAVENUE} from "../../views/Game/Constants.js";

class Full extends Component {

  constructor(props) {
    super(props);

    this.spin = this.spin.bind(this);
    this.registerMyBet = this.registerMyBet.bind(this);
    this.clearAllBets = this.clearAllBets.bind(this);
    
    this.state = {
      numberSpun: '',
      last20: [],
      winningBets: [],
      myBets: [],
      myBetsTotal: 0,
      balance: 200,
      broke: false,
      record: []
    };
  }


  registerMyBet(bet, amount)
  {
    var m = this.state.myBets;
    var myBet = {bet: bet, amount: amount};
    var updateExistingBet = false;

    for (var i=0; i<m.length; i++)
      if (m[i].bet == bet)
      {
        updateExistingBet = true;
        m[i].amount = amount;
      }

    if (!updateExistingBet)
      m.push(myBet);

    this.setState({
      myBets: m
    });
    
    var t=0;
    for (var i=0; i<this.state.myBets.length; i++)
      t += this.state.myBets[i].amount;
    
    this.setState({
      myBetsTotal: t
      });
  }


  clearAllBets()
  {
      for (var i=0; i<BETS.length; i++)
      {
          this.registerMyBet(BETS[i], 0);
          document.getElementById(BETS[i]).value="";
      }
  }


  spin() 
  {
      console.log("Show the spinning wheel...");

      // set the winning number
      var n = Math.floor(Math.random() * 38);

      // add it to the last20 list
      var l = this.state.last20;
      l.push(n);

      // determine what all the winning bets were based on the pocketed number
      var w = [];
      var payouts = [];
      
      w.push(WHEEL[n].toString());
      payouts.push(36);

      if (FIRST12.includes(WHEEL[n]))
      {
        w.push("FIRST12");
        payouts.push(3);
      }
      
      if (SECOND12.includes(WHEEL[n]))
      {
        w.push("SECOND12");
        payouts.push(3);
      }

      if (THIRD12.includes(WHEEL[n]))
      {
        w.push("THIRD12");
        payouts.push(3);
      }

      if (FIRST18.includes(WHEEL[n]))
      {
        w.push("FIRST18");
        payouts.push(2);
      }

      if (LAST18.includes(WHEEL[n]))
      {
        w.push("LAST18");
        payouts.push(2);
      }

      if (ODD.includes(WHEEL[n]))
      {
        w.push("ODD");
        payouts.push(2);
      }

      if (EVEN.includes(WHEEL[n]))
      {
        w.push("EVEN");
        payouts.push(2);
      }

      if (RED.includes(WHEEL[n]))
      {
        w.push("RED");
        payouts.push(2);
      }

      if (BLACK.includes(WHEEL[n]))
      {
        w.push("BLACK");
        payouts.push(2);
      }

      if (FIRSTAVENUE.includes(WHEEL[n]))
      {
        w.push("FIRSTAVENUE");
        payouts.push(3);
      }

      if (SECONDAVENUE.includes(WHEEL[n]))
      {
        w.push("SECONDAVENUE");
        payouts.push(3);
      }

      if (THIRDAVENUE.includes(WHEEL[n]))
      {
        w.push("THIRDAVENUE");
        payouts.push(3);
      }

    // determine if the user had any winning bets
    var winnings=0;
    for (var i=0; i<this.state.myBets.length; i++)
      for (var j=0; j<w.length; j++)
        if (this.state.myBets[i].bet === w[j])
        {
          console.log("You win " + this.state.myBets[i].amount*payouts[j]);
          winnings += this.state.myBets[i].amount*payouts[j];
        }

    var gameDecision = {decision:'', amount:''};
    var record = this.state.record;
    if (winnings > this.state.myBetsTotal)
    {
      gameDecision.decision = "Win";
      gameDecision.amount = winnings;
      record.push(gameDecision);
    }
        
    if (winnings < this.state.myBetsTotal)
    {
      gameDecision.decision = "Loss";
      gameDecision.amount = winnings;
      record.push(gameDecision);
    }

    // update the state so it can propogate to the rest of the app
    this.setState({
      record: record
    });
    
        
    // update the users balance
    var bal = this.state.balance;
    bal -= this.state.myBetsTotal;
    bal += winnings;

    // update the state so it can propogate to the rest of the app
    this.setState({
      numberSpun: n,
      last20: l,
      winningBets: w,
      balance: bal
    });

    if (bal <= 0)
      this.setState({
        broke: true
      });
      
    console.log("Stop the wheel and show the pocket.");

  }


  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <p>&nbsp;</p>
            <Container fluid>
              <Switch>
                <Route path="/roulette" render={ () => (
                                      <GameTable  last20={this.state.last20}
                                                  numberSpun={this.state.numberSpun}
                                                  balance={this.state.balance}
                                                  winningBets={this.state.winningBets}
                                                  myBetsTotal={this.state.myBetsTotal}
                                                  broke={this.state.broke}
                                                  registerMyBet={this.registerMyBet}
                                                  clearAllBets={this.clearAllBets}
                                                  spin={this.spin} />
                                                )}
                                                                                 />
                <Redirect from="/" to="/roulette"/>
              </Switch>
            </Container>
          </main>
          <Aside record={this.state.record} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
