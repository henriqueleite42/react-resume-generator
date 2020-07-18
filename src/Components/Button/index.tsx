import React from "react";

import { ColorsType } from "Assets/Style/Colors";

import { Container } from "./style";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorsType;
  "aria-label": string;
}

const Button: React.FC<IProps> = props => {
  return (
    <Container color={props.color || "primary"} {...props}>
      {props.children}
    </Container>
  );
};

export default React.memo(Button);
