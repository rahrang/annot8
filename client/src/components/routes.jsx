import React from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// React Router
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

// NPM Modules
import { StyleSheet, css } from "aphrodite";

// Actions
import { AuthActions } from "../actions/auth-actions";

// Containers
import Navbar from "./Navbar/Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import VideoPlayer from "./Video/VideoPlayer.jsx";
import Error404 from "./Error404.jsx";
import Footer from "./Footer.jsx";

class Routes extends React.Component {
  render() {
    let { history } = this.props;

    return (
      <div className={css(styles.routerContainer)}>
        <Navbar history={history} />
        <div className={css(styles.mainContainer)}>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route path={`/video/:videoId`} component={VideoPlayer} />
            <Route component={Error404} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: "calc(100vh - 110px)"
  }
});

const mapStateToProps = state => {
  return { authReducer: state.authReducer };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { authActions: bindActionCreators(AuthActions, dispatch) };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
