import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        /* Color */
        --color-gray: #232429;
        --color-gray-900: #393a3f;
        --color-gray-800: #55565B;
        --color-gray-700: #75767B;
        --color-gray-600: #828388;
        --color-gray-500: #919297;
        --color-gray-400: #ADAEB3;
        --color-gray-300: #C1C2C7;
        --color-gray-200: #D3D4D9;
        --color-gray-100: #DEDFE4;
        --color-gray-050: #F3F4F9;
        --color-purple: #5b446a;
        --color-purple-hover: #382345;
        --color-dark-purple: #210E2C;
        --color-dark-purple-hover: #391E48;
        --color-red: #FF0000;

        /* Fonts */

        --font-main: 'Inter', sans-serif;
        --font-details: 'Poppins', sans-serif;
    }

    body {
        font-family: var(--font-main);
        background: var(--color-gray);
        max-width: 100vw;
        min-height: 100vh;
    }
`