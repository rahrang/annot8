// React
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React Router
import { withRouter } from 'react-router';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

// Actions
import { MainActions } from '../actions/main-actions';

// Local Components
import Input from './Input.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className={css(styles.aboutContainer, styles.fadeIn)}>
        <h2 className={css(styles.header)}>About Annot8</h2>
        <p className={css(styles.tagline)}>Annot8 is your solution to not attending lecture.</p>
        <div className={css(styles.sectionContainer)}>
          <h3 className={css(styles.sectionHeader)}>What We Do</h3>
          <p className={css(styles.paragraph)}>Lorem Ipsum</p>
        </div>
        <div className={css(styles.sectionContainer)}>
          <h3 className={css(styles.sectionHeader)}>Our Target Audience</h3>
          <p className={css(styles.paragraph)}>Lorem Ipsum</p>
        </div>
        <div className={css(styles.sectionContainer)}>
          <h3 className={css(styles.sectionHeader)}>Why You Should Annot8</h3>
          <p className={css(styles.paragraph)}>Lorem Ipsum</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { main: state.main };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { mainActions: bindActionCreators(MainActions, dispatch) };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  header: {
    borderBottom: '3px solid #3F7BA9',
    color: '#333',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '2em',
    margin: '20px auto',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '200px',
  },

  tagline: {
    color: '#666',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.125em',
    textAlign: 'center',
    margin: '5px 0',
    padding: '0',
  },

  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left',
    padding: '20px 120px',
  },

  sectionHeader: {
    borderBottom: '3px solid #3F7BA9',
    color: '#333',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.25em',
    textAlign: 'left',
    margin: '5px 0',
    padding: '5px 2px',
  },

  paragraph: {
    color: '#666',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.125em',
    textAlign: 'left',
    margin: '5px 0',
    padding: '0',
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
