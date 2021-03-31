import React from 'react';
import Logo from "./Logo";

const restaurtants ={

};

class Header extends React.Component {

	render() {
		return (
			<footer>
				<div className="container">
					<div className="footer_inside">
						<div className="copyright">
							<Logo />
							<div className="year">© 2021</div>
						</div>
						<div style = {restaurtants}>
							<p>Restaurtant</p>
							<ul>
								<li>Restaurtant 1</li>
								<li>Restaurtant 2</li>
								<li>Restaurtant 3</li>
							</ul>
						</div>
						<div>
							<p>Delivery</p>

						</div>
						<div className="contacts">
							<p>Yunlong</p>
							<a href="mailto:example@tutorialspark.com">Send an Email </a>
							<p>To make a booking, call <a href="tel:+13174562564">317-456-2564</a></p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Header;
