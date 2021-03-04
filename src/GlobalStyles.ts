import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  h2{
    font-size: 3rem;
    color: #333;
  }
  h3{
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem;
  }p{
    font-size:1.2rem;
    line-height: 200%;
    color: #696969;
  }
  a{
    text-decoration:none;
    color: #333;
  }
}html{
    &::-webkit-scrollbar{
      width: .7rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: #696969;
    }
  }
`;
export default GlobalStyle;
