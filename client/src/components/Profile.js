import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GlobalContext } from '../context/GlobalState.js';
import { Redirect } from 'react-router-dom';
import { Fragment } from 'react';

const Profile = () => {
  const { token, user, setToken, setUser, login, setLogin } = useContext(
    GlobalContext
  );
  const jwt = Cookies.get('jwt');

  const Logout = () => {
    axios.get('/login/logout', {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    });

    setToken(null);
    setUser(null);
    setLogin(null);
    Cookies.remove('jwt');
    Cookies.remove('user');
    window.location.reload();
  };

  if (typeof jwt !== 'undefined') {
    const Me = Cookies.get('user');
    console.log(Me);

    if (typeof Me !== 'undefined') {
      const User = JSON.parse(Me.slice(2));
      const user_id = User._id;
      setToken(jwt);
      setUser(User);
      setLogin(true);

      return (
        <Fragment>
          <h1> Hey {User.Name} !!</h1>
          <button className='btn' onClick={Logout}>
            Log OUT
          </button>
        </Fragment>
      );
    }
  } else {
    return (
      <Fragment>
        <a href='/login/auth/google'>
          <button className='btn'>Log In..</button>
        </a>{' '}
      </Fragment>
    );
  }
};
export default Profile;
