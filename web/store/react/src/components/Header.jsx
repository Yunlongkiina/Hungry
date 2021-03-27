import React from 'react';
import CartIcon from './CartIcon';
import Logo from "./Logo";
import SpecialOffer from "./SpecialOffer";
import LoginIcon from "./LoginIcon";
class Header extends React.Component {
	render() {
		return (
			<div className="header_shadow">
				<div className="container">
					<header>
						<Logo />
						<p>Menu</p>
						<SpecialOffer />
						<p>Contact Us</p>
						<CartIcon />
						<LoginIcon />
					</header>
				</div>
			</div>
		);
	}
}

export default Header;
