import React from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import { useState } from 'react';
import colours from './colours';

const color = colours.secondary;
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  const [spinSpeed, setSpinSpeed] = useState(5);

  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${color};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        onClick={() => setSpinSpeed(spinSpeed/2)}
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: ${spinSpeed}s ${spin} linear infinite;

          &:hover {
            text-decoration: underline;
            animation: ${spinSpeed}s ${spin} linear infinite reverse;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐶
      </span>
    </header>
  )
};

export default NavBar;
