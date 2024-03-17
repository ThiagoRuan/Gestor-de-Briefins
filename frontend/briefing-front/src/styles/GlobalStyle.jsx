import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #0e0e3b;
    font-family: 'JetBrains Mono', Arial;
    color: white;
  }

  header, footer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: #2323a0;
    color: #cf7bff;
    font-size: 25px;
  }

  header {
    border-bottom: 1px solid white;
  }

  footer {
    border-top: 1px solid white;
    margin-top: auto; 
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

`

export default GlobalStyle;