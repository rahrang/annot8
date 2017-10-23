import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Local Components & Helpers
import Routes from './components/routes.jsx';
// import * as actions from './actions';
import { AuthActions } from './actions/auth-actions.js';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className={css(styles.appContainer)}>
        <Router style={{ height: '100%' }}>
          <Route component={Routes} />
        </Router>
      </div>
    );
  }
}

export default connect(null, AuthActions)(App);

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#F5F5F5',
    minHeight: '100vh'
  }
});
