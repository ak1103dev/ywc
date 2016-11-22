import React, { Component } from 'react';
import './App.css';

import moment from 'moment';

class App extends Component {
  render() {
    const now = moment();
    const thisMonth = now.format('MMMM')
    const thisYear = now.format('YYYY');
    console.log(now.daysInMonth());
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
          <p>{thisMonth}</p>
          <p>{thisYear}</p>
        </div>
      </div>
    );
  }
}

export default App;
