import React from "react";

import Button from "Components/Button";

import { Container, Input } from "./style";

interface IProps {
  label: string;
  setValue: (target: EventTarget & HTMLInputElement) => void;
}

const ImgUploadButton: React.FC<IProps> = ({ label, setValue }) => (
  <Container>
    <Input
      aria-label={label}
      type="file"
      name="myfile"
      onChange={e => setValue(e.target)}
    />
    <Button type="button" aria-label={label} disabled>
      {label}
    </Button>
  </Container>
);

export default ImgUploadButton;
