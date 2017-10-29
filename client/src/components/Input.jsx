// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";
import * as _ from "lodash";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  sanitizeLink = inputVal => {
    if (_.includes(inputVal, "youtube.com/watch?v=")) {
      let splitArr = inputVal.split("watch?v=");
      return splitArr[1];
    } else {
      this.setState({
        value: ""
      });
      return null;
    }
  };

  handleClick = () => {
    let videoId = this.sanitizeLink(this.refs.input.value);
    if (_.isNull(videoId)) {
      return;
    }
    console.log(this.props.history);
    this.props.history.push(`/video/${videoId}`);
  };

  render() {
    let { placeholder } = this.props;
    let { value } = this.state;

    return (
      <div className={css(styles.inputContainer, styles.fadeIn)}>
        <input
          className={css(styles.input)}
          onChange={e => this.setState({ value: e.target.value })}
          placeholder={
            placeholder
              ? placeholder
              : "Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          }
          type="text"
          ref="input"
          value={value}
          onKeyPress={e => this.handleKeyPress(e)}
        />
        <button
          className={css(styles.button, styles.mainButton)}
          onClick={this.handleClick}
        >
          Let's Go!
        </button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.125em",
    height: "40px",
    width: "500px",
    padding: "5px 0"
  },

  input: {
    color: "#666",
    border: "none",
    fontFamily: "Open Sans, sans-serif",
    outline: "none",
    padding: "5px 10px",
    height: "100%",
    width: "100%"
  },

  button: {
    backgroundColor: "#3F7BA9",
    border: "none",
    color: "#F5F5F5",
    cursor: "pointer",
    fontFamily: "Fjalla One, sans-serif",
    fontSize: "1.125em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "150px",
    outline: "none",
    textTransform: "uppercase",
    ":hover": {
      color: "#333"
    }
  }
});
