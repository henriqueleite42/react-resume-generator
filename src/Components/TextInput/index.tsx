import React from "react";

import {
  Container,
  LabelContainer,
  Label,
  InputContainer,
  Input,
  ErrorContainer,
} from "./style";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Para acessibilidade, todo input precisa de uma legenda, caso não queria
   * que ela seja visível, utilize a prop isLabelVisible={false}
   */
  name: string;
  label: string;
  isRequired?: boolean;
  errorMessage?: string;
  innerRef?: any;
  containerStyle?: React.CSSProperties;
}

const TextInput: React.FC<IProps> = props => {
  const {
    label,
    innerRef,
    errorMessage,
    containerStyle,
    isRequired,
    id,
  } = props;

  return (
    <Container style={containerStyle}>
      <InputContainer>
        <LabelContainer>
          <Label htmlFor={id} required={isRequired}>
            {label}
          </Label>
        </LabelContainer>
        <Input {...props} type="text" ref={innerRef} />
      </InputContainer>
      {errorMessage && (
        <ErrorContainer>
          <label>{errorMessage}</label>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(TextInput);
