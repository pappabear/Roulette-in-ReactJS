import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Progress, Label, Input} from 'reactstrap';
import classnames from 'classnames';

class Aside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.getColor = this.getColor.bind(this);
    this.renderRecord = this.renderRecord.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  getColor(o)
  {
      var color='black';
      if (o.decision == 'Loss')
          color = "callout callout-danger m-0 py-3";
      if (o.decision == 'Win')
          color = "callout callout-success m-0 py-3";
      return color;
  }

  renderRecord()
  {
    return this.props.record.map((o, i) =>
      <div>
        <hr className="transparent mx-3 my-0"/>
        <div className={this.getColor(o)}>
          <div>{o.decision} - <strong>{o.amount}</strong></div>
        </div>
      </div>
    )
  }


  render() {
    return (
      
      <aside className="aside-menu">
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small><b>Today</b></small>
            </div>
            {this.renderRecord()}
            <hr className="mx-3 my-0"/>
          </TabPane>
        </TabContent>
      </aside>
    )
  }
}

export default Aside;
