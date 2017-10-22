import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Local Components & Helpers
import Routes from './components/routes.jsx';

class App extends React.Component {
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

export default App;

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#F5F5F5',
    minHeight: '100vh'
  }
});
