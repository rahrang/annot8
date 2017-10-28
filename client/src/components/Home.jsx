// React
import React from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// React Router
import { withRouter } from "react-router";

// NPM Modules
import { css, StyleSheet } from "aphrodite";
import { fadeIn } from "react-animations";

// Actions
import { AuthActions } from "../actions/auth-actions";

// Local Components
import Input from "./Input.jsx";

class Home extends React.Component {
  render() {
    let { history } = this.props;
    return (
      <div className={css(styles.homeContainer, styles.fadeIn)}>
        <h2 className={css(styles.header)}> Welcome!</h2>
        <p className={css(styles.text)}>
          Please enter a YouTube link to begin!
        </p>
        <Input
          mainInput={true}
          history={history}
          placeholder="Enter a YouTube link!"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { authReducer: state.authReducer };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { mainActions: bindActionCreators(AuthActions, dispatch) };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

const styles = StyleSheet.create({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  header: {
    color: "#333",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "2em",
    fontWeight: "bold"
  },

  text: {
    color: "#666",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1.5em",
    fontWeight: "bold"
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: "1s"
  }
});
