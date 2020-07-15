import styled from "styled-components";

import {
  CONTAINER_MARGIN_BOTTOM,
  INPUT_WIDTH,
  LABEL_WIDTH,
  INPUT_PADDING,
} from "Assets/Style/Constants";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

export const Container = styled.div`
  display: flex;
  margin-bottom: ${CONTAINER_MARGIN_BOTTOM};
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  background-color: ${Colors.primary};
  color: ${Colors.background};
  width: ${LABEL_WIDTH};
  padding: ${INPUT_PADDING};
  ${fontBold};
`;

export const InputsContainer = styled.div`
  width: ${INPUT_WIDTH};

  > div {
    margin-bottom: ${CONTAINER_MARGIN_BOTTOM};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  background-color: ${Colors.secondary};
  padding: ${INPUT_PADDING};
  width: 80%;

  &:focus {
    background-color: ${Colors.primary};
    color: ${Colors.background};
    border-left: 1px solid ${Colors.background};

    &::placeholder {
      color: transparent;
    }
  }
`;

export const Button = styled.button<{ color: keyof typeof Colors }>`
  font-size: 0.8em;
  padding: 0.2em 0.5em;
  width: 20%;
  font-weight: bold;
  border: 0.3em solid ${({ color }) => Colors[color]};
  color: ${({ color }) => Colors[color]};

  &:focus,
  &:hover {
    background-color: ${({ color }) => Colors[color]};
    color: ${Colors.background};
  }
`;
