import React from 'react';
import { ReactComponent as Home } from './Icons/home.svg';
import { ReactComponent as Learn } from './Icons/learn.svg';
import { ReactComponent as Plus } from './Icons/plus.svg';
import { ReactComponent as Leaderboard } from './Icons/leaderboard.svg';
import { ReactComponent as Profile } from './Icons/profile.svg';
import classes from './AppDrawer.module.css';
import { Link } from 'react-router-dom';

function AppDrawer() {
  console.log(classes);
  return (
    <div
      id='drawer'
      style={{
        boxShadow: '0px -5px 155px rgba(0, 0, 0, 0.05)',
        height: '86px',
      }}
      className='flex fixed  bottom-0 bg-white w-full justify-around items-center px-6'
    >
      <Link to='/'>
        <Home className={classes.icon} />
      </Link>
      <Link to='/learn'>
        <Learn className={classes.icon} />
      </Link>
      <Link to='/leaderboard'>
        <Leaderboard className={classes.icon} />
      </Link>
      <Link to='/profile'>
        <Profile className={classes.icon} />
      </Link>
    </div>
  );
}

export default AppDrawer;
