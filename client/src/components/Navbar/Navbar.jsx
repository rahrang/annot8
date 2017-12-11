// React
import React from 'react';

// NPM Modules
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as _ from 'lodash';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

// Local Components
import NavbarProfile from './NavbarProfile.jsx';
import LoginButton from '../reusable_components/LoginButton.jsx';
import Input from '../Input.jsx';
import { AuthActions } from '../../actions/auth-actions.js';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    let { authReducer } = this.props;
    this.setState({ isLoggedIn: !_.isEmpty(authReducer.user) });
  }

  componentWillReceiveProps(nextProps) {
    let { authReducer } = this.props;
    if (!_.isEqual(authReducer.user, nextProps.authReducer.user)) {
      nextProps.fetchUser();
      this.setState({ isLoggedIn: !_.isEmpty(nextProps.authReducer.user) });
    }
  }

  isHomePath = () => {
    let { pathname } = this.props.history.location;
    let path = pathname.split('/')[1];
    return _.isEmpty(path);
  };

  render() {
    let { authReducer, history } = this.props;
    let { isLoggedIn } = this.state;

    return (
      <div id="navbar-container" className={css(styles.fadeIn)}>
        <div className={css(styles.headerContainer)}>
          <Link to="/" className={css(styles.headerLink)}>
            <h1 className={css(styles.header)}>Annot8</h1>
          </Link>
          {!this.isHomePath() && (
            <Input
              history={history}
              placeholder="Enter a YouTube link!"
              altStyle
            />
          )}
          <div className={css(styles.container)}>
            {isLoggedIn ? (
              <NavbarProfile user={authReducer.user} />
            ) : (
              <LoginButton defStyle />
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authReducer: state.authReducer };
}

export default withRouter(connect(mapStateToProps, AuthActions)(Navbar));

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#3F7BA9',
    minHeight: '50px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    '@media(max-width:768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

  headerLink: {
    color: '#F5F5F5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    ':hover': {
      color: '#FFAB40'
    }
  },

  header: {
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.5em',
    letterSpacing: '0.0625em',
    margin: 0,
    padding: '0 0 0 10px'
  },

  container: {
    padding: '0 20px 0 0'
  },

  link: {
    color: '#F5F5F5',
    fontSize: '1em',
    textDecoration: 'none',
    ':hover': {
      color: '#FFAB40'
    }
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
