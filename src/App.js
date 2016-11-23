import React, { Component } from 'react';
import './App.css';

import moment from 'moment';
import { getDates } from './utils';

class App extends Component {
  state = {
    month: moment().format('MMMM'),
    year: moment().format('YYYY'),
    date: getDates(moment())
  }
  render() {
    // const now = moment();
    // const thisMonth = now.format('MMMM')
    // const thisYear = now.format('YYYY');
    // console.log(now.daysInMonth());
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-header">
          <h1>
            <span>Young</span><br/>
            <span>Webmaster</span><br/>
            <span>Calendar</span><br/>
          </h1>
        </div>
        <div className="App-body">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <p>{thisMonth}</p>
          <p>{thisYear}</p> */}
        </div>
      </div>
    );
  }
}

export default App;
