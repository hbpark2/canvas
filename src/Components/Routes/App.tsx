import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CurrentContext } from "../../Context/ContextStore";
import { brownTheme, commonTheme, GlobalStyles } from "../../Styles/theme";
import Header from "../Layout/Header/Header";
import Routes from "./Routes";

function App() {
	const { tabState } = useContext(CurrentContext);

	return (
		<BrowserRouter>
			<ThemeProvider theme={tabState.theme === "01" ? commonTheme : brownTheme}>
				<GlobalStyles />
				<Header />
				<Routes />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
