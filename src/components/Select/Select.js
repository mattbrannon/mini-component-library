/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import '../index.css';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

export default function Select({ value, onChange, children }) {
  const displayedValue = getDisplayedValue(value, children);
  const nativeProps = { value, onChange };
  const iconProps = { id: 'chevron-down', strokeWidth: 2, size: 24 };

  return (
    <Wrapper>
      <NativeSelect {...nativeProps}>{children}</NativeSelect>
      <FlexWrapper>
        {displayedValue}
        <IconWrapper {...iconProps}>
          <Icon />
        </IconWrapper>
      </FlexWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--gray50);
  color: var(--gray500);
  position: relative;
  width: max-content;
  padding: 12px 16px;
  border-radius: 8px;

  &:hover {
    color: var(--black);
  }

  &:focus {
    box-shadow: 0px 0px 2px 2px dodgerblue;
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const IconWrapper = styled(Icon)`
  width: 100%;
  padding-left: 24px;
`;
