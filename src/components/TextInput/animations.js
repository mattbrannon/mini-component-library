import { css, keyframes } from 'styled-components/macro';

const up = keyframes`
  \ 0% {
    /* transform: translate(calc(1rem + var(--borderWidth)), 1.5rem); */
    transform: translate(0, 0);
    color: #797979;
    font-size: 13.333px;
    letter-spacing: initial;
  }

  \ 50% {
    letter-spacing: -0.35rem;
  }

  \ 100% {
    transform: translate(calc(2rem + var(--borderWidth)), -1.15rem);
      font-family:'Roboto', sans-serif;
      /* transform: translate(calc(2rem + var(--borderWidth)), calc(var(--borderWidth) * 0.5)); */
      color: hsla(240deg, 100%, 50%, 1);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: initial;
  }
`;

const down = keyframes`
  \ 0% {
    /* transform: translate(calc(2rem + var(--borderWidth)), calc(var(--borderWidth) * 0.5)); */
    transform: translate(calc(2rem + var(--borderWidth)), -1.15rem);
    color: hsla(240deg, 100%, 50%, 1);
    /* color: deepskyblue; */
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: initial;
  }

  \ 50% {
    letter-spacing: -0.35rem;
  }

  \ 100% {

    /* transform: translate(calc(1rem + var(--borderWidth)), 1.5rem); */
    transform: translate(0, 0);
    color: #797979;
    font-size: 13.333px;
    letter-spacing: initial;
  }
`;

export const rotateUp = css`
  animation: 0.4s ${up} forwards;
`;

export const rotateDown = css`
  animation: 0.4s ${down} forwards;
`;
