import React, { useState } from "react";
import Card from "..";
import { TextArea, TextInput } from "../../Input";
import { MutedButton, SubmitButton } from "./styles";
import { ICreatePost } from "../../../interfaces/IPost";
import { CreatePost } from "../../../server/Posts/create.post";

interface CardCreateProps {
  onPostCreated: () => void;
}
export default function CardCreate({ onPostCreated }: CardCreateProps) {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleAuthorChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAuthor(event.target.value);
  };

  const handleMessageChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const publishPost = ({ author, message }: ICreatePost) => {
    CreatePost({ author, message, createDate: new Date() })
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        onPostCreated();
      });
  };

  const handleSubmit = () => {
    if (!author || !message) {
      console.log("ASSSSSSSSS");

      return;
    }

    publishPost({ author, message });
  };

  const handleReset = () => {
    setAuthor("");
    setMessage("");
  };

  return (
    <Card.Background
      style={{
        marginBottom: "3.5rem",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextInput
        placeholder="Digite seu nome"
        value={author}
        onChange={handleAuthorChange}
      />
      <TextArea
        placeholder="Mensagem"
        value={message}
        onChange={handleMessageChange}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "1.5rem",
        }}
      >
        <MutedButton onClick={handleReset}>Descartar</MutedButton>

        <SubmitButton onClick={handleSubmit}>Publicar</SubmitButton>
      </div>
    </Card.Background>
  );
}
