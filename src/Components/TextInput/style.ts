import styled from "styled-components";

import {
  CONTAINER_MARGIN_BOTTOM,
  INPUT_WIDTH,
  LABEL_WIDTH,
  INPUT_PADDING,
} from "Assets/Style/Constants";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

interface ILabelProps {
  required?: boolean;
}

export const Container = styled.div`
  margin-bottom: ${CONTAINER_MARGIN_BOTTOM};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const LabelContainer = styled.div`
  background-color: ${Colors.primary};
  width: ${LABEL_WIDTH};
  display: flex;
  align-items: center;
`;

export const Label = styled.label<ILabelProps>`
  display: flex;
  margin: 0.5em;
  color: ${Colors.background};
  ${fontBold};

  ${({ required }) =>
    required &&
    `
    &:before {
      content: " *";
      margin-right: 0.3em;
      color: ${Colors.red};
    }
  `}
`;

export const Input = styled.input`
  background-color: ${Colors.secondary};
  padding: ${INPUT_PADDING};
  width: ${INPUT_WIDTH};

  &:focus {
    background-color: ${Colors.primary};
    color: ${Colors.background};
    border-left: 1px solid ${Colors.background};

    &::placeholder {
      color: transparent;
    }
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  padding: ${INPUT_PADDING};
  background-color: ${Colors.red};
`;
