// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";
import * as _ from "lodash";
import Select from "react-select";
import "react-select/dist/react-select.css";

// Local Components
import TimeInput from "./TimeInput.jsx";
const helpers = require("../../helpers.js");

export default class CommentTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      value: "",
      hours: "",
      minutes: "",
      seconds: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    let { timestamp } = this.props;
    if (!_.isEqual(timestamp, nextProps.timestamp)) {
      let { hours, minutes, seconds } = helpers.stringifyTime(
        nextProps.timestamp
      );
      this.setState({ hours, minutes, seconds });
    }
  }

  setTimes = view => {
    switch (view) {
      case "comments":
        let { timestamp } = this.props;
        return helpers.stringifyTime(timestamp);
      default:
        // covers view === "status"
        let { hours, minutes, seconds } = this.state;
        return { hours, minutes, seconds };
    }
  };

  onSelectChange = newSelected => {
    this.setState({ selected: newSelected });
  };

  onValueChange = event => {
    this.setState({ value: event.target.value });
  };

  onHoursChange = event => {
    this.setState({ hours: event.target.value });
  };

  onMinutesChange = event => {
    this.setState({ minutes: event.target.value });
  };

  onSecondsChange = event => {
    this.setState({ seconds: event.target.value });
  };

  handleSubmit = async () => {
    let { view } = this.props;
    let { value, selected, hours, minutes, seconds } = this.state;
    let isAnonymous = selected.value === "anonymous";
    if (view === "status") {
      let timestamp = helpers.convertTimeToSeconds(hours, minutes, seconds);
      await this.props.handleSubmit(value, isAnonymous, timestamp);
    } else {
      // view === "comments"
      await this.props.handleSubmit(value, isAnonymous);
    }
    this.setState({ value: "", hours: "", minutes: "", seconds: "" });
  };

  render() {
    let { onFocus, user, view } = this.props;
    let { selected, value } = this.state;

    let options = [
      { value: user.email, label: user.name },
      { value: "anonymous", label: "Anonymous to Everyone" }
    ];

    let { hours, minutes, seconds } = this.setTimes(view);

    return (
      <div className={css(styles.commentInput)}>
        <textarea
          className={css(styles.input)}
          value={value}
          onChange={e => this.onValueChange(e)}
          onFocus={onFocus}
          placeholder="Ask a question or make a comment!"
          cols={50}
          rows={4}
        />
        <div className={css(styles.submitRow)}>
          <button className={css(styles.button)} onClick={this.handleSubmit}>
            Comment
          </button>
          at
          <TimeInput
            // for both views
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            // used for "status" view
            onHoursChange={this.onHoursChange}
            onMinutesChange={this.onMinutesChange}
            onSecondsChange={this.onSecondsChange}
            // used for "comments" view
            disabled={view === "comments"}
          />
          as
          <Select
            className={css(styles.dropdown)}
            options={options}
            value={selected.value ? selected.value : options[0].value}
            onChange={this.onSelectChange}
            resetValue={options[0].value}
            searchable={false}
          />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  commentInput: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 10px",
    height: "150px"
  },

  input: {
    border: "none",
    color: "#333",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1em",
    margin: "5px",
    padding: "5px",
    outline: "none",
    resize: "none"
  },

  submitRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  timeInput: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9em",
    outline: "none",
    width: "60px",
    margin: "0 5px",
    padding: "4px 8px"
  },

  button: {
    border: "none",
    backgroundColor: "#3F7BA9",
    color: "#F5F5F5",
    cursor: "pointer",
    fontFamily: "Fjalla One, sans-serif",
    fontSize: "1em",
    outline: "none",
    margin: "0 5px",
    padding: "3px 10px"
  },

  dropdown: {
    cursor: "pointer",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.875em",
    margin: "0 5px",
    width: "225px"
  }
});
