import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StoreProvider } from "../../Context/ContextStore";
import { commonTheme, GlobalStyles } from "../../Styles/theme";
import Routes from "./Routes";

function App() {
	return (
		<StoreProvider>
			<BrowserRouter>
				<ThemeProvider theme={commonTheme}>
					<GlobalStyles />
					<Routes />
				</ThemeProvider>
			</BrowserRouter>
		</StoreProvider>
	);
}

export default App;
