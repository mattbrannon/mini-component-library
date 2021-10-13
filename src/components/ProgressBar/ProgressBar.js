/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    padding: 0,
    height: 8,
    radius: 4,
  },
  medium: {
    padding: 0,
    height: 16,
    radius: 4,
  },
  large: {
    padding: 4,
    height: 24,
    radius: 8,
  },
};

const ProgressBar = (props) => {
  const value = props.value;
  const sizes = SIZES[props.size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      sizes={sizes}
      value={value}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>

      <BarWrapper>
        <Bar />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs(({ sizes, value }) => ({
  style: {
    '--padding': sizes.padding + 'px',
    '--height': sizes.height + 'px',
    '--radius': sizes.radius + 'px',
    '--value': value + '%',
  },
}))`
  padding: var(--padding);
  border-radius: var(--radius);

  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--value);

  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
