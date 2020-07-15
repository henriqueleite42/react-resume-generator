import styled from "styled-components";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

export const Container = styled.div`
  padding: 1em 0;
  width: 100vw;
  min-height: 100vh;
  background-color: ${Colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  ${fontBold};
  font-size: 3em;
  text-align: center;

  @media screen and (max-width: 900px) {
    margin: 0;
    font-size: 2em;
    padding: 1em;
  }
`;

export const FormContainer = styled.form`
  width: 50vw;
  padding: 1em;

  > h1 {
    text-align: center;
    margin-bottom: 2em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
    padding: 0.5em;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
