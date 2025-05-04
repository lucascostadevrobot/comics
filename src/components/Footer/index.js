import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/lucas-costa-2219b5189/">
        <p>Lucas da Costa da Silva @ Up</p>
      </a>
      <p>
        Projeto acadêmico
        {' '}
        <a href="https://www.linkedin.com/in/lucas-costa-2219b5189/">
          Imersão React Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
