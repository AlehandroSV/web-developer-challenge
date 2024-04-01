import {
  CardBackgroundType,
  CardMessageType,
  CardAuthorType,
  CardImageType,
} from "./types";
import {
  AuthorContainer,
  AuthorName,
  AuthorTitle,
  Container,
  Image,
  Message,
} from "./styles";

function CardBackground({ children, style }: CardBackgroundType) {
  return <Container style={style}>{children}</Container>;
}
CardBackground.displayName = "Card.Background";

function CardImage({ url }: CardImageType) {
  return <Image src={url} />;
}
CardImage.displayName = "Card.Image";

function CardMessage({ text }: CardMessageType) {
  return <Message>{text}</Message>;
}
CardMessage.displayName = "Card.Message";

function CardAuthor({ name }: CardAuthorType) {
  return (
    <AuthorContainer>
      <AuthorTitle>Enviado por</AuthorTitle>
      <AuthorName>{name}</AuthorName>
    </AuthorContainer>
  );
}
CardAuthor.displayName = "Card.Author";

const Card = {
  Background: CardBackground,
  Image: CardImage,
  Text: CardMessage,
  Author: CardAuthor,
};

export default Card;
