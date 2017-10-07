import React  from 'react'
import TimeCalculator from './TimeCalculator'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import 'react-select/dist/react-select.css'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={ this.state.activeTab === '1' ? 'active' : '' }
              onClick={() => { this.toggle('1'); }}
            >
              Army Return Calculator
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={ this.state.activeTab === '2' ? 'active' : '' }
              onClick={() => { this.toggle('2'); }}
            >
              Coming Soon...
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <TimeCalculator />
          </TabPane>
          <TabPane tabId="2">
            <div className="body-content">
              <h4>More tools coming soon...</h4>
            </div>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}