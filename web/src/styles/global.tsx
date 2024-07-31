import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<{theme: any}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: '${props => props.theme.fontFamily}', sans-serif;
  }
  
  body {
    background: transparent;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  button {
    cursor: pointer;
    outline: 0;
  }
`;
