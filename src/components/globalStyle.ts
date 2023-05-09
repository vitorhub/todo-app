import { createGlobalStyle } from "styled-components";

/* modelo reset styled components */

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

ul,
ol,
li {
    list-style: none;
    list-style-type: none;
}

a {
    text-decoration: none;
}

html {
    scroll-behavior: smooth;
}
body {
    width: 100%;
}
`