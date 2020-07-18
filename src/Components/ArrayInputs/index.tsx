import React from "react";

import {
  Container,
  Label,
  InputsContainer,
  InputContainer,
  Button,
  Input,
} from "./style";

interface IProps {
  label: string;
  inputs: Array<string>;
  setValue: (index: number, value: string) => void;
  addField: () => void;
  removeField: (index: number) => void;
}

const ArrayInputs: React.FC<IProps> = ({
  label,
  inputs,
  setValue,
  addField,
  removeField,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputsContainer>
        {inputs.map((value, index) => (
          <InputContainer key={index}>
            <Input
              value={value}
              onChange={e => setValue(index, e.target.value)}
            />
            {index !== 0 && (
              <Button
                color="red"
                type="button"
                onClick={() => removeField(index)}
              >
                Remove
              </Button>
            )}
            {index === 0 && (
              <Button color="green" type="button" onClick={() => addField()}>
                Add
              </Button>
            )}
          </InputContainer>
        ))}
      </InputsContainer>
    </Container>
  );
};

export default React.memo(ArrayInputs);
