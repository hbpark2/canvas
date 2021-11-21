import { Route, Switch } from "react-router";
import Detail from "../../Detail/Detail";
import Home from "../../Home/Home";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/detail/:id" component={Detail} />
		</Switch>
	);
};

export default Routes;
