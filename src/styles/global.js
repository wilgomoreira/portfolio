import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw"
import imageBackground from '../assets/back-portfolio.jpg'


export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background-image: url(${imageBackground});
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
   }

   /* Web: 16px, Tablet: 18px e Mobile: 24px,  */

  :root {
      font-size: ${px2vw(16)};

      @media (max-width: 1023px) {
        font-size: ${px2vw(24)};
      }

      @media (max-width: 767px) {
        font-size: ${px2vw(40)};
        margin-right: ${px2vw(30)};
      }
    }
`;

export default Global;