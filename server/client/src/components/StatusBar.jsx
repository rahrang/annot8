// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';

import StatusItem from './StatusItem.jsx';

export default class StatusBar extends React.Component {
  render() {

    let statuses = _.range(0, 5).map((p) => {
      return (
        <StatusItem
          timeStamp="11:11"
          text="Lorem Ipsum Dolor Sit Amet Y TextAlign that"
          changeView={this.props.changeView}
        />
      );
    });

    return (
      <div className={css(styles.statusBarContainer, styles.fadeIn)}>
        <div className={css(styles.headerContainer)}>
          <p className={css(styles.header)}>Posts</p>
        </div>
        <div className={css(styles.bodyContainer)}>
          {statuses}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  statusBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '10px 0 0',
  },

  headerContainer: {
    backgroundColor: '#F5F5F5',
    borderBottom: '3px solid #3F7BA9',
    color: '#333',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.25em',
    padding: '3px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  },

  header: {
    margin: 0,
    padding: 0,
  },

  bodyContainer: {
    width: '100%',
    overflowY: 'scroll',
    height: '100%',
  },
});
