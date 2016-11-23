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
      <div className="app">
        <div className="header">
          <h1 className="header-title">
            <span>Young</span><br/>
            <span>Webmaster</span><br/>
            <span>Calendar</span><br/>
          </h1>
        </div>
        <div className="body">
          <div className="calendar">
            <div className="title">
              <div className="title-left">
                <button>{`<`}</button>
              </div>
              <div className="title-right">
                <button>{`>`}</button>
              </div>
              <div className="title-center">
                <h2>{`${month} ${year}`}</h2>
              </div>
            </div>
            <table className="content">
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
      </div>
    );
  }
}

export default App;
