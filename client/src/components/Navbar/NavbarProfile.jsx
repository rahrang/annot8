// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import { css, StyleSheet } from 'aphrodite';

const NavbarProfile = props => {
  const getInitials = fullname => {
    let fullnameArr = fullname.split(' ');
    let firstLetters = [];
    fullnameArr.forEach(name => firstLetters.push(name[0]));
    return firstLetters.join('');
  };

  let { user } = props;
  return (
    <Link className={css(styles.profileContainer)} to={'/profile'}>
      <p className={css(styles.userEmail)}>{user.email.toLowerCase()}</p>
      {_.isEmpty(user.photo) ? (
        <div className={css(styles.initicon)}>
          <p className={css(styles.initials)}>{getInitials(user.name)}</p>
        </div>
      ) : (
        <img
          src={user.photo}
          height={50}
          width={50}
          alt={user.name}
          className={css(styles.userPhoto)}
        />
      )}
    </Link>
  );
};

export default NavbarProfile;

const styles = StyleSheet.create({
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none'
  },

  userEmail: {
    color: '#F5F5F5',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em'
  },

  userPhoto: {
    borderRadius: '50%',
    margin: '0 7.5px'
  },

  initicon: {
    backgroundColor: '#F5F5F5',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 7.5px',
    height: '50px',
    width: '50px'
  },

  initials: {
    color: '#3F7BA9',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.75em',
    textTransform: 'uppercase'
  }
});
