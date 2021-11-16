import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { commonTheme, GlobalStyles } from "../../Styles/theme";
import Routes from "./Routes";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={commonTheme}>
				<GlobalStyles />
				<Routes />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
