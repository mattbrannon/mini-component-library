import React, { useLayoutEffect, useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { COLORS, VARIANTS } from './constants';
import { withTheme } from './withTheme';

const WrappedButton = withTheme(Button);
export default WrappedButton;

function Button({ variant, size, children }) {
  const [isFocused, setIsFocused] = useState(false);
  const [Outline, setOutline] = useState(Border);
  const [Component, setComponent] = useState(Base);
  const themeContext = useContext(ThemeContext);

  const setTheme = (button, border) => {
    setComponent(button);
    setOutline(border);
  };

  useLayoutEffect(() => {
    const {
      fill,
      outline,
      ghost,
      danger,
      warning,
      success,
      fancy,
    } = VARIANTS;

    if (variant === fill) {
      setTheme(FillButton, FillBorder);
    } else if (variant === outline) {
      setTheme(OutlineButton, OutlineBorder);
    } else if (variant === ghost) {
      setTheme(GhostButton, GhostBorder);
    } else if (variant === danger) {
      setTheme(DangerButton, DangerBorder);
    } else if (variant === warning) {
      setTheme(WarningButton, WarningBorder);
    } else if (variant === success) {
      setTheme(SuccessButton, SuccessBorder);
    } else if (variant === fancy) {
      setTheme(FancyButton, FancyBorder);
    } else {
      setTheme(Base, Border);
    }
  }, [variant]);

  return (
    <Outline style={themeContext[size].outline} isFocused={isFocused}>
      <Component
        style={themeContext[size]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {children}
      </Component>
    </Outline>
  );
}

const Base = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  font-style: medium;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  border: none;
`;

const FillButton = styled(Base)`
  ${(p) => p.theme.info};
  &:hover {
    ${(p) => p.theme.info.hover};
  }
`;

const OutlineButton = styled(Base)`
  ${(p) => p.theme.invert};
  &:hover {
    ${(p) => p.theme.invert.hover};
  }
  &:focus {
    ${(p) => p.theme.invert.focus};
  }
`;

const GhostButton = styled(Base)`
  ${(p) => p.theme.disabled};
  &:hover {
    ${(p) => p.theme.disabled.hover};
  }
  &:focus {
    ${(p) => p.theme.disabled.focus};
  }
`;

const WarningButton = styled(Base)`
  ${(p) => p.theme.warning};
  &:hover {
    ${(p) => p.theme.warning.hover};
  }
`;

const DangerButton = styled(Base)`
  ${(p) => p.theme.danger};
  &:hover {
    ${(p) => p.theme.danger.hover};
  }
`;

const SuccessButton = styled(Base)`
  ${(p) => p.theme.success};
  &:hover {
    ${(p) => p.theme.success.hover};
  }
`;

const FancyButton = styled(Base)`
  ${(p) => p.theme.fancy};
  &:hover {
    ${(p) => p.theme.fancy.hover};
  }
`;

const setBorder = (props, color) => {
  return props.isFocused ? `0 0 0 1px ${color}` : 'none';
};

const setBackground = (props, color) => {
  return props.isFocused ? color : 'transparent';
};

const Border = styled.div`
  padding: var(--padding);
  border-radius: var(--borderRadius);
  display: inline-block;
  box-shadow: none;
`;

const FillBorder = styled(Border)`
  box-shadow: ${(p) => setBorder(p, COLORS.primary)};
  background: ${(p) => setBackground(p, COLORS.white)};
`;

const OutlineBorder = styled(Border)`
  box-shadow: ${(p) => setBorder(p, COLORS.primary)};
`;

const GhostBorder = styled(Border)`
  box-shadow: ${(p) => setBorder(p, COLORS.gray)};
  background: ${(p) => setBackground(p, COLORS.transparentGray15)};
`;

const DangerBorder = styled(Border)`
  box-shadow: ${(p) => setBorder(p, COLORS.red)};
  background: ${(p) => setBackground(p, COLORS.white)};
`;

const WarningBorder = styled(Border)`
  box-shadow: ${(p) => setBorder(p, COLORS.orange)};
  background: ${(p) => setBackground(p, COLORS.white)};
`;

const SuccessBorder = styled(Border)`
  box-shadow: ${(p) => setBorder(p, COLORS.greenLight)};
  background: ${(p) => setBackground(p, COLORS.white)};
`;

const FancyBorder = styled(Border)`
  box-shadow: ${(p) => setBorder(p, COLORS.fancyPink)};
  background: ${(p) => setBackground(p, COLORS.fancyOrangeLight)};
`;
