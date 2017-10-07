import React from 'react'
import Moment from 'react-moment'
import Select from 'react-select'
import { getTzOptions } from './utils'
import 'moment-timezone'

import './Input.css'

export default class TimeCalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hourInput: "",
      timestamp: null,
      timezone: 'Asia/Kuala_Lumpur'
    }
  }
  
  calculateTime(hour) {
    const result = new Date().getTime() + (hour * 60 * 60000)
    this.setState({
      timestamp: new Date(result)
    })
  }

  handleInput = (e) => {
    let filteredHour = e.target.value.replace(/[^0-9.]/g, '')
    this.setState({
      hourInput: filteredHour
    }, this.calculateTime(filteredHour))

  }

  setTimezone = (tz) => {
    if (tz) {
      this.setState({timezone: tz.value})
    } else {
      this.setState({timezone: 'Asia/Kuala_Lumpur'})
    }
  }

  render() {

    const { timestamp, timezone, hourInput } = this.state
    console.log(hourInput)
    return (
      <div className="body-content">
      <div className="time-calc-container">
        <h4>
          { timestamp == null  || hourInput == "" ?
            "" :
            <span>They return on <Moment format="MMMM Do, YYYY hh:mm A" tz={ timezone }>{ timestamp }</Moment></span> }
        </h4>

          <form>
            <input
              type="text"
              className="question"
              required
              value={ hourInput }
              onChange={ this.handleInput }
            />
            <label id="hour-input-label"><span>How many hours till army return?</span></label>
          </form>
        <Select
          className="time-calc-dropdown"
          name="tz-dropdown"
          value={ timezone }
          options={ getTzOptions() }
          onChange={ (tz) => {this.setTimezone(tz)} }
        />
      </div>
      </div>
    )
  }
}