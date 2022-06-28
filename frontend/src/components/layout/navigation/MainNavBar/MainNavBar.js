import React from 'react'
import classes from './MainNavBar.module.scss';
import Search from './Search/Search';

const MainNavBar = () => {
  return (
    <div className={classes.mainnavbar}>
      <div className={classes.logo}>
        <img
              src={require('../../../../assets/images/logos/logo-small.png')}
              alt="logo"
          />
      </div>
      <div className={classes.searchbar}>
        <Search />
      </div>
      <div className={classes.navbar}>
        <nav>
        <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">SHOP</a>
            </li>
            <li>
              <a href="/">MY ACCOUNT</a>
            </li>
        </ul>
        </nav>
      </div>
    </div>
  )
}

export default MainNavBar
