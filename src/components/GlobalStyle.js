import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding: 0;
}
body{
    margin:0;
    padding: 0;
    font-family: 'Red Hat Display', sans-serif;
    overflow-x: hidden;
}
.container{
    width: 95%;
    max-width: 1300px;
  margin: auto;
  padding: 0 15px 90px;
}`;
export default GlobalStyle;
