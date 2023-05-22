import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.bg}
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p,
  input {
    margin: 0;
    padding: 0;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px ${({ theme }) =>
      theme.colors.bgItems}; /* колір вашого фону */
    -webkit-text-fill-color: ${({ theme }) =>
      theme.colors.mainText}; /* колір тексту */
  }

  address {
    font-style: normal;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;
