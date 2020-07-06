import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }

    :root {
        --primary: #282A36;
        --secondary: #343746;
        --tertiary: #262626;
        --quaternary: #484950;
        --quinary: #393d42;
        --senary: #828386;

        --white: #fff;
        --gray: #8a8c90;
        --chat-input: #262626;
        --symbol: #74777a;

        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;

        --link: #5d80d6;

        --rocketseat: #6633cc;
    }
`;
