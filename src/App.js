import React, { Component } from 'react';
import './App.css';

import moment from 'moment';
import { getDates } from './utils';

class App extends Component {
  state = {
    month: moment().format('MMMM'),
    year: moment().format('YYYY'),
    dates: getDates(moment())
  }
  render() {
    const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const { month, year, dates } = this.state;
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
          <table>
            <caption>{`${month} ${year}`}</caption>
            <tr>
              {dayOfWeek.map((day) =>
                <th>{day}</th>
              )}
            </tr>
            {dates.map((row) =>
              <tr>
                {row.map((date) =>
                  <td>{date}</td>
                )}
              </tr>
            )}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
