import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: "Realestate",
		};
	}

	render() {
		return (
			<header className="home">
				<div> Logo</div>
				<nav>
					<a href="#">create ads</a>
					<a href="#">about us</a>
					<a href="#">Login</a>
					<a href="#" className="register-btn">
						Register
					</a>
				</nav>
			</header>
		);
	}
}
