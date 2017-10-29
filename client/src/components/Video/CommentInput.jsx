// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";
import Select from "react-select";
import "react-select/dist/react-select.css";

export default class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {}
    };
  }

  onSelectChange = newOption => {
    this.setState({ selected: newOption });
    this.props.setAnonymous(newOption.value === "anonymous");
  };

  render() {
    let { inputValue, onChange, onFocus, handleSubmit, user } = this.props;
    let { selected } = this.state;

    let options = [
      { value: user.email, label: user.name },
      { value: "anonymous", label: "Anonymous to Everyone" }
    ];

    return (
      <div className={css(styles.commentInput)}>
        <textarea
          value={inputValue}
          onChange={e => onChange(e)}
          onFocus={onFocus}
          className={css(styles.input)}
          placeholder="Ask a question or make a comment!"
          cols={50}
          rows={4}
        />
        <div className={css(styles.submitRow)}>
          <button className={css(styles.button)} onClick={handleSubmit}>
            Comment
          </button>
          as
          <Select
            className={css(styles.dropdown)}
            options={options}
            value={selected.value ? selected.value : options[0].value}
            onChange={this.onSelectChange}
            resetValue={options[0].value}
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
