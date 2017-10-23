import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React Router
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Actions
import { AuthActions } from '../actions/auth-actions';

// Containers
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import YouTubePlayer from './YouTubePlayer.jsx';
import Footer from './Footer.jsx';

// Data Files

class Routes extends React.Component {
  componentDidMount() {}

  render() {
    let { history } = this.props;

    return (
      <div className={css(styles.routerContainer)}>
        <Navbar history={history} />
        <div className={css(styles.mainContainer)}>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/about'} component={About} />
            <Route path={`/video/:videoId`} component={YouTubePlayer} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: 'calc(100vh - 85px)',
  }
});

const mapStateToProps = state => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { authActions: bindActionCreators(AuthActions, dispatch) };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
