import styled from "styled-components";

import { BUTTON_PADDING, BUTTON_BORDER_SIZE } from "Assets/Style/Constants";

import Colors, { ColorsType } from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

export const Container = styled.button<{ color: ColorsType }>`
  padding: ${BUTTON_PADDING};
  transition: all 0.15s ease-in-out;
  border: ${BUTTON_BORDER_SIZE} solid ${({ color }) => Colors[color]};
  color: ${({ color }) => Colors[color]};
  ${fontBold};

  &:focus,
  &:hover {
    background-color: ${({ color }) => Colors[color]};
    color: ${Colors.background};
  }
`;
