// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// React Router
import { withRouter } from 'react-router';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

// Local Components
import Input from './Input.jsx';

class Home extends React.Component {
  render() {
    let { history } = this.props;
    return (
      <div className={css(styles.homeContainer, styles.fadeIn)}>
        <h2 className={css(styles.header)}> Welcome to Annot8!</h2>
        <Input
          mainInput={true}
          history={history}
          placeholder="Please enter a YouTube link!"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { authReducer: state.authReducer };
};

export default withRouter(connect(mapStateToProps, null)(Home));

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh'
  },

  header: {
    color: '#333',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '3em',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  text: {
    color: '#666',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.5em',
    fontWeight: 'bold'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
