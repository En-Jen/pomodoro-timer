import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    /* RESET from https://piccalil.li/blog/a-modern-css-reset */

    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    /* Remove list styles on ul, ol elements */
    ul,
    ol {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* GLOBAL STYLES */
    html {
        --color-salmon: hsl(0, 91%, 71%);
        --color-lt-blue: hsl(182, 91%, 71%);
        --color-purple: hsl(284, 89%, 74%);
        --color-grey-blue: hsl(227, 100%, 92%);
        --color-navy: hsl(236, 36%, 18%);
        --color-dark-navy: hsl(234, 39%, 14%);
        --color-white: hsl(0, 0%, 100%);
        --color-grey: hsl(229, 52%, 96%);
        --font-kumbh: 'Kumbh Sans', sans-serif;
        --font-roboto: 'Roboto Slab', serif;
        --font-space: 'Space Mono', monospace;
    }

    body {
        background-color: var(--color-navy);
    }
`;

export default GlobalStyles;
