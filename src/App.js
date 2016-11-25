import React, { Component } from 'react';
import './App.css';

import moment from 'moment';
import { getDates, getPoint } from './utils';

class App extends Component {
  state = {
    date: moment(),
    month: moment().format('MMMM'),
    year: moment().format('YYYY'),
    dates: getDates(moment()),
    point: getPoint(moment()),
  }
  update = (date) => {
    const presentMonth = moment().format('M');
    const presentYear = moment().format('YYYY');
    const month = date.format('M');
    const year = date.format('YYYY');
    const isSame = presentYear === year && presentMonth === month;
    this.setState({
      date,
      month: date.format('MMMM'),
      year: date.format('YYYY'),
      dates: getDates(date),
      point: isSame ? getPoint(moment()) : { x: -1, y: -1}
    });
  }
  prev = () => {
    const date = this.state.date.subtract(1, 'month');
    this.update(date);
  }
  next = () => {
    const date = this.state.date.add(1, 'month');
    this.update(date);
  }
  headerTitleRender() {
    return (
      <h1 className="header-title">
        <span>Young</span><br/>
        <span>Webmaster</span><br/>
        <span>Calendar</span><br/>
      </h1>
    );
  }
  shortHeaderTitleRender() {
    return (
      <h1 className="header-title-mobile">
        <span>YWCalendar</span>
      </h1>
    );
  }

  render() {
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const { month, year, dates, point } = this.state;
    console.log(this.state);
    return (
      <div className="app">
        <div className="header">
          {this.headerTitleRender()}
          {this.shortHeaderTitleRender()}
        </div>
        <div className="body">
          <div className="calendar">
            <div className="title">
              <div className="title-left">
                <button onClick={this.prev}>{`<`}</button>
              </div>
              <div className="title-right">
                <button onClick={this.next}>{`>`}</button>
              </div>
              <div className="title-center">
                <h2>{`${month} ${year}`}</h2>
              </div>
            </div>
            <table className="content">
              <thead>
                <tr>
                  {dayOfWeek.map((day, i) =>
                    <th key={i}>{day}</th>
                  )}
                </tr>
              </thead>
              <tbody>
              {dates.map((row, i) =>
                <tr key={i}>
                  {row.map((date, j) =>
                    <td key={j} className={point.x === i && point.y === j ? 'focus' : 'non-focus'}>{date}</td>
                  )}
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
