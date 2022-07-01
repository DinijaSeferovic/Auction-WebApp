import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.header}>
		<div className={classes.header_socialmedia}> 
			<ul>
				<li>
					<a href="https://facebook.com" target="_blank" rel="noreferrer">
						<img
							src={require('../../../../assets/images/icons/facebook-icon.png')}
							alt="facebook"
						/>
					</a>
				</li>
				<li>
					<a href="https://instagram.com" target="_blank" rel="noreferrer">
						<img
							src={require('../../../../assets/images/icons/instagram-icon.png')}
							alt="instagram"
						/>
					</a>
				</li>
				<li>
					<a href="https://twitter.com" target="_blank" rel="noreferrer">
						<img
							src={require('../../../../assets/images/icons/twitter-icon.png')}
							alt="twitter"
						/>
					</a>
				</li>
			</ul>
		</div>
		<div className={classes.header_righttext}>
			<h5>Hi, John Doe</h5>
		</div>
    </div>
  )
};

export default Header;
