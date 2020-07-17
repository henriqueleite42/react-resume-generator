import styled from "styled-components";

import {
  CONTAINER_MARGIN_BOTTOM,
  LABEL_WIDTH,
  INPUT_WIDTH,
  INPUT_PADDING,
} from "Assets/Style/Constants";

import Colors from "Assets/Style/Colors";
import { fontBold, fontRegular } from "Assets/Style/Fonts";

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
  overflow: hidden;

  > textarea {
    background-color: ${Colors.secondary};
    width: ${INPUT_WIDTH};
    padding: ${INPUT_PADDING};
    min-height: 7em;
    ${fontRegular};

    &:focus {
      background-color: ${Colors.primary};
      color: ${Colors.background};
      border-left: 1px solid ${Colors.secondary};

      &::placeholder {
        color: transparent;
      }
    }
  }
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

export const ErrorContainer = styled.div`
  width: 100%;
  padding: ${INPUT_PADDING};
  background-color: ${Colors.red};
`;

export const Limit = styled.span<{ remaining: number }>`
  color: ${({ remaining }) => (remaining >= 0 ? "#817575" : Colors.red)};
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
`;
