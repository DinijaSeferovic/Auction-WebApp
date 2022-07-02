import React from 'react'
import classes from './Footer.module.scss';
import {Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <div className={classes.footer}>
            <div className={classes.footer_left}>
                <div className={classes.footer_left_heading}>
                    <h4>AUCTION</h4>
                </div>
                <div className={classes.footer_left_pagelist}>
                    <ul>
                        <li>
                            <Link to="/aboutus" className={classes.link}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/termsandconditions" className={classes.link}>Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link to="/privacypolicy" className={classes.link}>Privacy and Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.footer_right}>
                <div className={classes.footer_right_heading}>
                    <h4>GET IN TOUCH</h4>
                </div>
                <div className={classes.footer_right_info}>
                    <h4>Call Us at +123 797-567-2535</h4>
                    <h4>support@auction.com</h4>
                </div>
                <div className={classes.footer_right_socialmedia}> 
                    <ul>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img
                                    src={require('../../../assets/images/icons/facebook-icon.png')}
                                    alt="facebook"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <img
                                    src={require('../../../assets/images/icons/instagram-icon.png')}
                                    alt="instagram"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <img
                                    src={require('../../../assets/images/icons/twitter-icon.png')}
                                    alt="twitter"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer