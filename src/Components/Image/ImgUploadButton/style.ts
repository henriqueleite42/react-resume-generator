import styled from "styled-components";

import { BUTTON_PADDING } from "Assets/Style/Constants";

import Colors from "Assets/Style/Colors";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  padding: ${BUTTON_PADDING};
  cursor: pointer;

  &::-webkit-file-upload-button {
    cursor: pointer;
  }

  &:hover + button,
  &:focus + button {
    background-color: ${Colors.primary};
    color: ${Colors.background};
  }
`;
