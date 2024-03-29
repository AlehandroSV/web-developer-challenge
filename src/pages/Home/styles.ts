import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextFeed = styled.span`
  width: 32.25rem;
  line-height: "1.125rem";
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;
