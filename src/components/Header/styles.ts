import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 5.813rem;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem 0 3rem;

  img {
    width: 6.438rem;
    height: 2.813rem;
  }
`;

export const Button = styled.button`
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  cursor: pointer;
`;
