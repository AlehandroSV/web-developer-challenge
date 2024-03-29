import styled from "styled-components";

export const Container = styled.div`
  width: 32.25rem;
  min-height: 6.25rem;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 1.5rem;
  border-radius: 0.188rem;
`;

export const Image = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 2.25rem;
`;

export const Message = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const AuthorTitle = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.text.muted};
`;

export const AuthorName = styled.span`
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;
