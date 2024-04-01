import styled from "styled-components";

export const TextInput = styled.input`
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.theme.colors.inputBackgroud} !important;
  width: 100%;
  height: 2.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: 0;
`;

export const TextArea = styled.textarea`
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.theme.colors.inputBackgroud} !important;
  width: 100%;
  height: 5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: 0;
  resize: none;
  font-family: "Arial", sans-serif;
`;
