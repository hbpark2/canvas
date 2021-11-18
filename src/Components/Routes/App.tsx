import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CurrentContext } from "../../Context/ContextStore";
import { brownTheme, commonTheme, GlobalStyles } from "../../Styles/theme";
import Routes from "./Routes";

function App() {
	const { themeState, setThemeState } = useContext(CurrentContext);

	return (
		<BrowserRouter>
			<ThemeProvider theme={themeState === "common" ? commonTheme : brownTheme}>
				<GlobalStyles />
				<Routes />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
