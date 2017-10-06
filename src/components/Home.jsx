// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

export default class Home extends React.Component {
  render() {
    return (
      <div className={css(styles.homeContainer, styles.fadeIn)}>
        Home Container
      </div>
    );
  }
}

const styles = StyleSheet.create({});
