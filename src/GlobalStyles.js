// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

export default GlobalStyles;
