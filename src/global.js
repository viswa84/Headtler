import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;

/* font sizes */
--font-size-base: 1rem;
--font-size-sm: 0.88rem;
--font-size-17xl: 2.25rem;
--font-size-3xl: 1.38rem;
--font-size-10xl: 1.81rem;
--font-size-lg: 1.13rem;
--font-size-29xl: 3rem;
--font-size-19xl: 2.38rem;

/* Colors */
--color-white: #fff;
--color-gray-100: #fafafa;
--color-gray-200: #1c1c21;
--color-darkslategray: #3d404a;
--color-lightgray: #d6d6de;
--color-gainsboro: #e6e8eb;
--color-royalblue: #617afa;

/* Gaps */
--gap-xl: 1.25rem;
--gap-5xl: 1.5rem;
--gap-base: 1rem;
--gap-21xl: 2.5rem;
--gap-xs: 0.75rem;
--gap-13xl: 2rem;
--gap-5xs: 0.5rem;
--gap-9xs: 0.25rem;
--gap-0: 0rem;

/* Paddings */
--padding-21xl: 2.5rem;
--padding-xl: 1.25rem;
--padding-12xs: 0.06rem;
--padding-6xs: 0.44rem;
--padding-5xs: 0.5rem;
--padding-9xs: 0.25rem;
--padding-xs: 0.75rem;
--padding-base: 1rem;
--padding-82xl: 6.31rem;
--padding-47xl: 4.13rem;
--padding-20xl: 2.44rem;
--padding-61xl: 5rem;
--padding-lg: 1.13rem;
--padding-7xl: 1.63rem;

/* Border radiuses */
--br-xs: 12px;
--br-5xs: 8px;
--br-xl: 20px;

}
`;
