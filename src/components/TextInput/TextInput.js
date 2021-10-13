import styled from 'styled-components/macro';
import { rotateUp, rotateDown } from './animations';

import React, { useState, useEffect } from 'react';

export default function TextInput({ placeholder, legend, exampleText }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isBlurred, setIsBlurred] = useState(null);
  const [label, setLabel] = useState(placeholder);
  const [example, setExample] = useState(exampleText);
  // const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const swapText = (callback, text, delay) =>
      setTimeout(() => callback(text), delay);

    isFocused
      ? swapText(setLabel, legend, 300)
      : swapText(setLabel, placeholder, 100);

    isFocused
      ? swapText(setExample, 'Ex: JolietJake', 400)
      : swapText(setExample, '', 100);
  }, [isFocused, placeholder, legend]);

  const handleFocusChange = (e) => {
    if (e.type === 'blur') {
      if (e.target.value.length === 0) {
        setIsFocused(false);
        setIsBlurred(true);
      }
    }
    if (e.type === 'focus') {
      setIsFocused(true);
    }
  };

  return (
    <Container>
      <Fieldset isFocused={isFocused}>
        <Legend>{legend}</Legend>
      </Fieldset>
      <Label isBlurred={isBlurred} isFocused={isFocused}>
        {label}
      </Label>
      <Input
        autoFocus
        onFocus={handleFocusChange}
        onBlur={handleFocusChange}
        isFocused={isFocused}
        type="email"
        placeholder={isFocused ? example : null}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  margin-top: 96px;
  max-width: 400px;
  margin: auto;

  max-height: 96px;
  height: 50%;
  font-size: 1rem;

  --borderWidth: 2px;
  --borderRadius: 4px;

  isolation: isolate;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 0;
  color: #797979;

  transform: translate(calc(1rem + var(--borderWidth)), 1.5rem);
  ${(p) =>
    p.isFocused
      ? rotateUp
      : p.isBlurred !== null && p.isBlurred
      ? rotateDown
      : null};
`;

const Input = styled.input`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  font-size: 1rem;
  padding-left: 1rem;
  border: none;
  outline: none;
  border-width: var(--borderWidth);
  border-radius: var(--borderRadius);
  border-style: solid;
  border-color: ${({ isFocused }) => (isFocused ? 'transparent' : 'gray')};
  &:hover {
    border-color: ${({ isFocused }) => !isFocused && 'black'};
  }
`;

const Fieldset = styled.fieldset`
  position: absolute;
  top: 0;
  left: 0;
  height: inherit;
  width: 100%;
  border-width: var(--borderWidth);
  border-radius: var(--borderRadius);
  border-style: solid;
  border-color: ${({ isFocused }) => (isFocused ? 'blue' : 'transparent')};
`;

const Legend = styled.legend`
  line-height: 0;
  padding: 0 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  margin-left: 1rem;
  opacity: 0;
`;
