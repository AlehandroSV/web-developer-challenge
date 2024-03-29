import { RouterProvider } from "react-router-dom";
import Routes from "./routes";

import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global";

import Header from "./components/Header";

import usePersistedState from "./utils/hooks/usePersistedState";

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <RouterProvider router={Routes()} />
      </>
    </ThemeProvider>
  );
}
