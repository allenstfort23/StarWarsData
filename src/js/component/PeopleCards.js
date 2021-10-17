import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Home } from "../views/home";

export const PeopleCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "17rem" }}>
			<a href="https://placeholder.com">
				<img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
			</a>
			<hr className="bg-danger" />
			<div className="card-body">
				<h5 className="card-title text-justify">{props.name}</h5>
				<p className="card-text text-justify">
					Gender: {props.gender}
					<hr />
					Hair-Color: {props.hair_color}
					<hr />
					EyeColor: {props.eye_color}
				</p>
				<Link to={"/single/" + props.index}>
					<a href="#" className="btn btn-outline-primary float-left">
						Learn More
					</a>
				</Link>
				<button
					href="#"
					className="btn btn-outline-warning float-right"
					onClick={() => actions.updateFavorites(props.name)}>
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
};

PeopleCard.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	index: PropTypes.number
};
