import { useContext } from "react";
import { Button, Container } from "./styles";
import { ThemeContext } from "styled-components";
import { Moon, Sun } from "lucide-react";

type HeaderType = {
  toggleTheme: () => void;
};

export default function Header({ toggleTheme }: HeaderType) {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <div></div>

      <img src="logo.svg" alt="" />

      <Button onClick={toggleTheme}>
        {theme?.title === "dark" ? (
          <Moon color={theme.colors.text} />
        ) : (
          <Sun color={theme?.colors.text} />
        )}
      </Button>
    </Container>
  );
}
