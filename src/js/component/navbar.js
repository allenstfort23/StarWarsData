import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap/";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 sticky-top">
			<Link to="/">
				<div className="navbar-brand mb-0 h1">
					<img
						src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
						width="100"
						alt="star wars logo"
					/>
				</div>
			</Link>
			<div className="ml-auto">
				<Dropdown as={ButtonGroup}>
					<Dropdown.Toggle id="dropdown-custom-1">Favorites {store.favorites.length}</Dropdown.Toggle>
					<Dropdown.Menu className="super-colors">
						{store.favorites.map((item, index) => {
							return (
								<Dropdown.Item eventKey="1" key={index}>
									{item}
									<button onClick={() => actions.deleteFavorites(item)}>
										<i className="fas fa-trash mr-2" />
									</button>
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>{" "}
			</div>
		</nav>
	);
};
