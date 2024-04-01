import Card from "..";
import { CardAuthorType, CardImageType, CardMessageType } from "../types";

interface CardViewProps
  extends CardAuthorType,
    CardImageType,
    CardMessageType {}

export default function CardView({ name, text, url }: CardViewProps) {
  return (
    <Card.Background
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <Card.Image url={url}></Card.Image>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Card.Text text={text}></Card.Text>

        <Card.Author name={name}></Card.Author>
      </div>
    </Card.Background>
  );
}
