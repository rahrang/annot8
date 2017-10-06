import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React Router
import { Switch, Route } from 'react-router-dom';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import * as _ from 'lodash';

// Actions
import { MainActions } from '../actions/main-actions';

// Containers
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';

// Data Files

class Routes extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className={css(styles.routerContainer)}>
        <div className={css(styles.mainContainer)}>
          <Navbar />
          <Switch>
            <Route exact path={'/'} component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return { main: state.main };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { mainActions: bindActionCreators(MainActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
