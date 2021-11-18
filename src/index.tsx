import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/Routes/App";
import { StoreProvider } from "./Context/ContextStore";

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<App />
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
