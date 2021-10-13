export const COLORS = {
  primary: 'hsl(240deg 100% 60%)',
  primaryLight: 'hsl(235deg 100% 66%)',
  white: 'hsl(0deg 0% 100%)',
  offwhite: 'hsl(235deg 85% 97%)',
  gray: 'hsl(240deg 10% 50%)',
  transparentGray15: 'hsl(240deg 10% 50% / 0.15)',
  transparentGray75: 'hsl(240deg 10% 50% / 0.75)',
  black: 'hsl(0deg 0% 0%)',
  red: 'hsl(352deg 65% 54%)',
  redLight: 'hsl(352deg 60% 60%)',
  orange: 'hsl(30deg 70% 50%)',
  orangeLight: 'hsl(30deg 60% 58%)',
  green: 'hsl(120deg 100% 25%)',
  greenLight: 'hsl(120deg 90% 33%)',
  fancyOrange: 'hsl(39, 100%, 50%)',
  fancyOrangeLight: 'hsl(39deg, 100%, 72%)',
  fancyPink: 'hsl(328, 100%, 54%)',
  fancyPinkLight: 'hsl(328, 80%, 66%)',
};

export const VARIANTS = {
  fill: 'fill',
  outline: 'outline',
  ghost: 'ghost',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  fancy: 'fancy',
};

export const SIZES = {
  small: {
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '8px 16px',
    '--borderRadius': '2px',
    outline: {
      '--borderRadius': '4px',
      '--padding': '4px',
    },
  },
  medium: {
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '16px 24px',
    '--borderRadius': '4px',
    outline: {
      '--borderRadius': '6px',
      '--padding': '4px',
    },
  },
  large: {
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '20px 36px',
    '--borderRadius': '4px',
    outline: {
      '--borderRadius': '6px',
      '--padding': '4px',
    },
  },
};

export const THEMES = {
  danger: {
    background: COLORS.red,
    color: COLORS.white,
    hover: {
      background: COLORS.redLight,
    },
  },
  warning: {
    background: COLORS.orange,
    color: COLORS.white,
    hover: {
      background: COLORS.orangeLight,
    },
  },
  info: {
    background: COLORS.primary,
    color: COLORS.white,
    hover: {
      background: COLORS.primaryLight,
    },
  },
  invert: {
    background: COLORS.white,
    color: COLORS.primary,
    boxShadow: `0 0 0 1px ${COLORS.primary}`,
    hover: {
      background: COLORS.offwhite,
    },
  },
  disabled: {
    background: 'transparent',
    color: COLORS.gray,
    hover: {
      background: COLORS.transparentGray15,
      color: COLORS.black,
    },
    focus: {
      boxShadow: `0 0 0 1px ${COLORS.gray}`,
    },
  },
  success: {
    background: COLORS.green,
    color: COLORS.white,
    hover: {
      background: COLORS.greenLight,
    },
  },
  fancy: {
    background: COLORS.fancyPink,
    color: COLORS.white,
    hover: {
      background: COLORS.fancyPinkLight,
      color: COLORS.white,
    },
  },
};
