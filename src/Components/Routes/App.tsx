import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CurrentContext } from "../../Context/ContextStore";
import { navyTheme, skyblueTheme, GlobalStyles } from "../../Styles/theme";
import Meta from "../Common/Meta";
import Header from "../Layout/Header/Header";
import Routes from "./Routes";

function App() {
  const { tabState } = useContext(CurrentContext);

  return (
    <>
      <Meta
        data={{
          title: "Jake",
          description: "jake's profile site",
          locale: "ko",
        }}
      />

      <BrowserRouter>
        <ThemeProvider
          theme={tabState.theme === "01" ? navyTheme : skyblueTheme}
        >
          <GlobalStyles />
          <Header />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
