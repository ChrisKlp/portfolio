import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }
  body {
    min-width: 28rem;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.background};
  }
`;

export default GlobalStyle;
