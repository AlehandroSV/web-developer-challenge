import { Button } from "./styles";

type HeaderType = {
  toggleTheme: () => void;
};

export default function Header({ toggleTheme }: HeaderType) {
  return (
    <>
      <Button onClick={toggleTheme}>Trocar Theme</Button>
    </>
  );
}
