import styled from "styled-components";

import { INPUT_PADDING } from "Assets/Style/Constants";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

export const Fieldset = styled.fieldset`
  > legend {
    font-weight: bold;
    width: 100%;
    background-color: ${Colors.primary};
    color: ${Colors.background};
    border-bottom: 1px solid ${Colors.background};
    padding: ${INPUT_PADDING};
    ${fontBold};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.5em;
  overflow: hidden;
  position: relative;

  > div {
    width: 100%;
  }
`;

export const Label = styled.label`
  text-align: center;
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  padding: ${INPUT_PADDING};
  z-index: 5;
  background-color: ${Colors.secondary};
  color: ${Colors.primary};
  font-weight: bold;
  ${fontBold};
`;

export const Input = styled.input`
  display: none;

  &:checked + label,
  &:hover + label,
  &:focus + label {
    background-color: ${Colors.primary};
    color: ${Colors.background};
  }
`;
