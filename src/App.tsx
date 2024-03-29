import { RouterProvider } from "react-router-dom";
import Routes from "./routes";
import { ThemeProvider } from "./contexts/Theme.context";
import Header from "./components/Header";

export default function App() {
  return (
    <ThemeProvider>
      <>
        <Header />
        <RouterProvider router={Routes()} />
      </>
    </ThemeProvider>
  );
}
