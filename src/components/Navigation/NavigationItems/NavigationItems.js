import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
	let authItems = <NavigationItem link='/auth'>Authenticate</NavigationItem>;

	if (props.isAuth) {
		authItems = (
			<React.Fragment>
				<NavigationItem link='/logout'>Logout</NavigationItem>
				<NavigationItem link='/orders'>Orders</NavigationItem>
			</React.Fragment>
		);
	}

	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem link='/' exact>
				Burger Builder
			</NavigationItem>
			{authItems}
		</ul>
	);
};

export default navigationItems;
