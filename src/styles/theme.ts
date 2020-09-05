const spacingStep = 0.25

export const theme = {
  color: {
    palette: {
      primary: '#42aaf4',
    },
    background: {
      light: '#fff',
    },
    text: {
      dark: '#050d11',
      grey: '#666',
      light: '#fff',
    },
  },
  spacing: (topBottom: number, rightLeft?: number) =>
    rightLeft
      ? `${topBottom * spacingStep}rem ${rightLeft * spacingStep}rem`
      : `${topBottom * spacingStep}rem`,
}
