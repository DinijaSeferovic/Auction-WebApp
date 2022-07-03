import React from 'react'
import classes from './MainNavBar.module.scss';
import Search from './Search/Search';
import {NavLink } from "react-router-dom";

const MainNavBar = () => {
  return (
    <div className={classes.mainnavbar}>
		<div className={classes.mainnavbar_logo}>
			<img
				src={require('../../../../assets/images/logos/logo-small.png')}
				alt="logo"
			/>
		</div>
		<div className={classes.mainnavbar_searchbar}>
			{/*<Search />*/}
		</div>
		<div className={classes.mainnavbar_navbar}>
			<nav>
				<ul>
					<li>
						<NavLink to="/"  className={classes.navlink}>HOME</NavLink>
					</li>
					{/* 
					<li>
						<NavLink to="/shop">SHOP</NavLink>
					</li>
					<li>
						<NavLink to="/account">MY ACCOUNT</NavLink>
					</li>*/}
				</ul>
			</nav>
		</div>
    </div>
  )
}

export default MainNavBar
