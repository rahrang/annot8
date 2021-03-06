import React from 'react';

// React Router
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Containers
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import About from './About.jsx';
import VideoPlayer from './Video/VideoPlayer.jsx';
import Error404 from './Error404.jsx';
import Footer from './Footer.jsx';

class Routes extends React.Component {
  render() {
    return (
      <div className={css(styles.routerContainer)}>
        <Navbar />
        <div className={css(styles.mainContainer)}>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/profile'} component={Profile} />
            <Route exact path={'/video/:videoId'} component={VideoPlayer} />
            <Route
              exact
              path={'/video/:videoId/:timestamp'}
              component={VideoPlayer}
            />
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
    minHeight: 'calc(100vh - 110px)'
  }
});

export default withRouter(Routes);
