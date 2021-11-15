import React from "react";
import { Route, Switch } from "react-router";

import Home from "../../Home/Home";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
};

export default Routes;
