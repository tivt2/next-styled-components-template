export const theme = {
  media: {
    tablet: `@media screen and (min-width: 768px)`,
    desktop: `@media screen and (min-width: 1024px)`,
  },
  font: {
    xxs: `${10 / 16}rem`,
    xs: `${14 / 16}rem`,
    s: `${16 / 16}rem`,
    sm: `${18 / 16}rem`,
    m: `${24 / 16}rem`,
    ml: `${30 / 16}rem`,
    l: `${36 / 16}rem`,
    xl: `${48 / 16}rem`,
    xxl: `${60 / 16}rem`,
    xxxl: `${72 / 16}rem`,
    xxxxl: `${84 / 16}rem`,
    resp: (min: string, val: string, max: string, speed: number = 1.5) =>
      `clamp(${min}, calc{${val} + ${speed}vw), ${max})`,
  },
  color: {},
};
