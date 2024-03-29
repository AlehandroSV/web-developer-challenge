import {
  CardBackgroudType,
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

function CardBackgroud({ children, style }: CardBackgroudType) {
  return <Container style={style}>{children}</Container>;
}
CardBackgroud.displayName = "Card.Backgroud";

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
  Backgroud: CardBackgroud,
  Image: CardImage,
  Text: CardMessage,
  Author: CardAuthor,
};

export default Card;
