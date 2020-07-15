import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import {
  Container,
  LabelContainer,
  Label,
  InputContainer,
  ErrorContainer,
  Limit,
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
  limit?: number;
  innerRef?: any;
  containerStyle?: React.CSSProperties;
}

const Textarea: React.FC<IProps> = props => {
  const {
    label,
    innerRef,
    errorMessage,
    containerStyle,
    isRequired,
    placeholder,
    limit,
    name,
    id,
  } = props;

  const [length, setLength] = useState<number>(0);

  return (
    <Container style={containerStyle}>
      <InputContainer>
        <LabelContainer>
          <Label htmlFor={id} required={isRequired}>
            {label}
          </Label>
        </LabelContainer>
        <TextareaAutosize
          name={name}
          onChange={e => setLength(e.target.value.length)}
          placeholder={placeholder || ""}
          ref={innerRef}
        />
        {limit && <Limit remaining={limit - length}>{limit - length}</Limit>}
      </InputContainer>
      {errorMessage && (
        <ErrorContainer>
          <label>{errorMessage}</label>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default Textarea;
