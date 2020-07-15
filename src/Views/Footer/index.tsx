import React from "react";

import { GITHUB, NAME } from "Config/constants";

import { Container } from "./style";

const Footer: React.FC = () => {
  return (
    <Container>
      <span>
        Made by{"  "}
        <a target="_blank" rel="noopener noreferrer" href={GITHUB}>
          {NAME}
        </a>
      </span>
    </Container>
  );
};

export default Footer;
