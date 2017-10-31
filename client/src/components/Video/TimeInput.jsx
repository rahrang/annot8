// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";
// import * as _ from "lodash";

// Local Components

export default class TimeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      hours,
      minutes,
      seconds,
      onHoursChange,
      onMinutesChange,
      onSecondsChange,
      disabled
    } = this.props;
    return (
      <div className={css(styles.inputContainer)}>
        <input
          className={css(styles.timeInput)}
          value={hours}
          type="text"
          onChange={e => onHoursChange(e)}
          placeholder={"00"}
          maxLength={2}
          pattern={"[0-9]{2}"}
          disabled={disabled}
        />
        :
        <input
          className={css(styles.timeInput)}
          value={minutes}
          type="text"
          onChange={e => onMinutesChange(e)}
          placeholder={"00"}
          maxLength={2}
          pattern={"[0-9]{2}"}
          disabled={disabled}
        />
        :
        <input
          className={css(styles.timeInput)}
          value={seconds}
          type="text"
          onChange={e => onSecondsChange(e)}
          placeholder={"00"}
          maxLength={2}
          pattern={"[0-9]{2}"}
          disabled={disabled}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    border: "none",
    borderRadius: "3px",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 5px",
    padding: "2px 3px"
  },

  timeInput: {
    border: "none",
    // borderRadius: "3px",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9em",
    outline: "none",
    width: "17px",
    margin: "0 1px",
    padding: "2px 0"
  }
});
