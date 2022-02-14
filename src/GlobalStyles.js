import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --base-color: white;
    --shadow-modal:rgba(0, 0, 0, 0.25);
    --title: #000000;
    --label-input : #6B6E74;
    --backgroud-danger: #FFD5D5;
    --text-danger: #9A0000;
    --button-color : black;
    --button-secondary-color : #EEEEEE;
}


html, body{
    background-color:  rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`;
