import styled from "styled-components";

import Colors from "Assets/Style/Colors";

export const Container = styled.footer`
  height: 4em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primary};
  color: ${Colors.background};

  a {
    color: ${Colors.background};
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`;
