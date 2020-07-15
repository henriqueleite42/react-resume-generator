import React from "react";

import { Fieldset, Container, Label, Input } from "./style";

interface IProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Array<{
    value: string | number;
    name: string;
  }>;
}

const Radio: React.FC<IProps> = ({ label, value, name, onChange, options }) => {
  return (
    <Fieldset>
      <legend>{label}</legend>
      <Container>
        {options.map(option => (
          <div key={option.value}>
            <Input
              aria-label={option.name}
              type="radio"
              name={name}
              value={option.value}
              id={`${option.value}`}
              onChange={onChange}
              checked={value === option.value}
            />
            <Label htmlFor={`${option.value}`}>
              <span>{option.name}</span>
            </Label>
          </div>
        ))}
      </Container>
    </Fieldset>
  );
};

export default Radio;
