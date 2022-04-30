import React from 'react';
import { ReactComponent as Home } from './Icons/home.svg';
import { ReactComponent as Learn } from './Icons/learn.svg';
import { ReactComponent as Leaderboard } from './Icons/leaderboard.svg';
import { ReactComponent as Profile } from './Icons/profile.svg';
import classes from './AppDrawer.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


function AppDrawer(props) {

    const location = useLocation();
    console.log(location.pathname)
  
  return (
    <div
      id='drawer'
      style={{
        boxShadow: '0px -5px 155px rgba(0, 0, 0, 0.05)',
        height: '86px',
        zIndex:21,
      }}
      className='flex fixed  bottom-0 bg-white w-full justify-around items-center px-6'
    >
      <Link to='/'>
        <Home className={classes.icon} data-active={location.pathname==='/'}/>
      </Link>
      <Link to='/learn'>
        <Learn className={classes.icon}  data-active={location.pathname==='/learn'} />
      </Link>
      <Link to='/leaderboard'>
        <Leaderboard className={classes.icon}  data-active={location.pathname==='/leaderboard'}/>
      </Link>
      <Link to='/profile'>
        <Profile className={classes.icon}  data-active={location.pathname==='/profile'}/>
      </Link>
    </div>
  );
}

export default AppDrawer;
