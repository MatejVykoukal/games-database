import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  h2{
    font-size: 3rem;
    color: #eee;
  }
  h3{
    font-size: 1.3rem;
    color: #eee;
  }p{
    font-size:1.2rem;
    line-height: 200%;
    color: #9a9a9a;
  }
  a{
    text-decoration:none;
    color: #eee;
  }
  img{
    display: block;
  }
}html{
    &::-webkit-scrollbar{
      width: .5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: #c24141;
    }
    &::-webkit-scrollbar-track {
      background-color: #747474;
    }
  }
`;
export default GlobalStyle;
