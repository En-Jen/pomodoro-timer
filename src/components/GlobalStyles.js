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
        /* Colors */
        --color-salmon: hsl(0, 91%, 71%);
        --color-blue: hsl(182, 91%, 71%);
        --color-purple: hsl(284, 89%, 74%);
        --color-grey-blue-opaque: hsl(226, 100%, 92%, .4);
        --color-grey-blue: hsl(226, 99%, 92%);
        --color-navy-opaque: hsl(235, 35%, 18%, .73);
        --color-navy: hsl(236, 36%, 18%);
        --color-dark-navy: hsl(234, 39%, 14%);
        --color-modal-overlay: hsl(234, 47%, 8%, .5);
        --color-modal-outline: hsl(220, 98%, 61%);
        --linear-gradient: linear-gradient(to bottom right, hsl(235, 49%, 11%), hsl(234, 33%, 27%));
        --box-shadow: -50px -50px 100px hsl(234, 40%, 25%), 50px 50px 100px hsl(234, 45%, 13%);
        --color-white: hsl(0, 0%, 100%);
        --color-grey: hsl(229, 52%, 96%);
        --color-grey-border: hsl(0, 2%, 89%);

        /* Fonts */
        --font-size-timer: 4rem;
        --font-size-controls: 0.75rem;
        --font-size-h2: 1.25rem;
        --font-size-h3: 0.6875rem;
        --font-size-timer-text: 0.875rem;
        --font-size-label: 0.75rem;
        --font-size-num-input: 0.875rem;
        --font-size-apply: 1rem;

        @media (min-width: 600px) {
            --font-size-timer: 6.25rem;
            --font-size-controls: 0.875rem;
            --font-size-h2: 1.75rem;
            --font-size-h3: 0.8125rem;
            --font-size-timer-text: 1rem;
        }
    }

    body {
        position: relative;
        background-color: var(--color-navy);
        font-family: ${p => p.theme.font};
        font-weight: 700;
        padding: 32px 24px;

        @media (min-width: 600px) {
            padding: 80px;
        }

        @media (min-width: 1024px) {
            padding: 48px;
        }
    }

    h2 {
        font-size: var(--font-size-h2);
        color: var(---color-dark-navy);
    }

    h3 {
        font-size: var(--font-size-h3);
        letter-spacing: 4px;
        text-transform: uppercase;
        color: var(---color-dark-navy);

        @media (min-width: 600px) {
            letter-spacing: 5px;
        }
    }

    a:focus, button:focus {
        outline: 2px dotted var(--color-grey-blue);
        outline-offset: 2px;
    }
`;

export default GlobalStyles;
