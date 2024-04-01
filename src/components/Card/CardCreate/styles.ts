import styled from "styled-components";

export const SubmitButton = styled.button`
  max-width: 6.125rem;
  background-color: ${(props) => props.theme.colors.inputBackgroud} !important;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 0.875rem;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.tertiary};
  padding: 0.75rem 1.5rem;
`;

export const MutedButton = styled.button`
  color: ${(props) => props.theme.colors.text.muted};
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  max-width: 6.125rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
`;
