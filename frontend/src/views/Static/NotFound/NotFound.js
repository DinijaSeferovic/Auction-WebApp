import React from 'react'
import {useNavigate} from 'react-router-dom';
import Button from '../../../components/Button/Button'
import classes from './NotFound.module.scss'

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div>
        <div className={classes.notfound}>
            <img
              src={require('../../../assets/images/logos/logo-small.png')}
              alt="logo"
			      /> 
            <h1>404</h1>
            <h3>Ooops! Looks like the page is Not Found</h3>
            <Button 
              onClick={() => navigate(-1)} 
              type="button" 
              btnStyle="primary-outline"
              btnSize="medium"
            >
              GO BACK
            </Button>
        </div>
    </div>
  )
}

export default NotFound
