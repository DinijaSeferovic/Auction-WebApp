import classes from "./Title.module.scss";

const Title = ({ name }) => {
	return (
		<div className={classes.titlecontainer}>
			<div className={classes.title}>
				<h5>{name}</h5>
			</div>
		</div>
	);
};

export default Title;
