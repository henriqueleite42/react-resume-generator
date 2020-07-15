import styled from "styled-components";

import {
  CONTAINER_MARGIN_BOTTOM,
  LABEL_WIDTH,
  INPUT_PADDING,
  INPUT_WIDTH,
} from "Assets/Style/Constants";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

export const Container = styled.div`
  display: flex;
  margin-bottom: ${CONTAINER_MARGIN_BOTTOM};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
  margin-top: ${CONTAINER_MARGIN_BOTTOM};
`;

export const Label = styled.div`
  padding: ${INPUT_PADDING};
  display: flex;
  align-items: center;
  font-weight: bold;
  background-color: ${Colors.primary};
  color: ${Colors.background};
  width: ${LABEL_WIDTH};
  ${fontBold};

  &:before {
    content: " *";
    margin-right: 0.3em;
    color: ${Colors.red};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${INPUT_WIDTH};
  background-color: ${Colors.secondary};
  padding: ${INPUT_PADDING};

  > img {
    max-width: 100%;
    max-height: 50vh;
  }
`;

export const CropperContainer = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
`;
