import React from 'react'
import classes from './Title.module.scss'

const Title = (props) => {
  return (
    <div>
		<div className={classes.titlecontainer}>
			<h5>{props.name}</h5>
		</div>
    </div>
  )
}

export default Title

