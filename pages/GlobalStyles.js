import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle` 
    ${reset}

    @font-face {
        font-family: "Pretendard";
        font-weight: 400;
        src: url("/font/Pretendard-Regular.woff") format("woff");
        }
    @font-face {
        font-family: "Pretendard";
        font-weight: 500;
        src: url("/font/Pretendard-Medium.woff") format("woff");
    }
    @font-face {
        font-family: "Pretendard";
        font-weight: 600;
        src: url("/font/Pretendard-Bold.woff") format("woff");
    }
    body{
        font-family: "Pretendard";
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
        background-clip: padding-box;
        border: 2px solid transparent;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    }
    a{
        text-decoration: none;
        color:#333;
    }
`;

export default GlobalStyles;