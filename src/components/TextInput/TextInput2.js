import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import { rotateUp, rotateDown } from './animations';

export default function TextInput({ placeholder, legend, exampleText }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isBlurred, setIsBlurred] = useState(null);
  const [label, setLabel] = useState(placeholder);
  const [example, setExample] = useState(exampleText);

  useEffect(() => {
    const swapText = (callback, text, delay) =>
      setTimeout(() => callback(text), delay);

    if (isFocused) {
      swapText(setLabel, legend, 200);
      swapText(setExample, exampleText, 300);
    } else {
      swapText(setLabel, placeholder, 100);
      swapText(setExample, '', 350);
    }

    // isFocused
    //   ? swapText(setLabel, legend, 200)
    //   : swapText(setLabel, placeholder, 100);

    // isFocused
    //   ? swapText(setExample, exampleText, 300)
    //   : swapText(setExample, '', 350);
  }, [isFocused, placeholder, legend, exampleText]);

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
      <Wrapper>
        <Fieldset isFocused={isFocused}>
          <Legend>{legend}</Legend>
        </Fieldset>
        <Input
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
          isFocused={isFocused}
          placeholder={example}
        />
        <Label isFocused={isFocused} isBlurred={isBlurred}>
          {label}
        </Label>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 80vh;
  width: 80vw;
`;

const Wrapper = styled.div`
  position: relative;
  --paddingTopBottom: 14px;
  --paddingLeftRight: 18.5px;
  --padding: var(--paddingTopBottom) var(--paddingLeftRight);

  --baseGrey: hsl(0, 0%, 77%);
  --focusBlue: hsl(211, 74%, 47%);
  --hoverBlack: hsl(0, 0%, 16%);

  --borderRadius: 4px;
  --borderWidth: 2px;

  color: rgba(0, 0, 0, 0.87);
  cursor: text;
  display: inline-flex;
  font-size: 1rem;
  align-items: center;
  font-family: 'Arial thin', 'Helvetica', sans-serif;
  font-weight: 400;
  line-height: 1.1876em;
  background: white;
  /* width: 180px; */
  width: 100%;
  height: 42px;
`;

const Fieldset = styled.fieldset`
  position: relative;
  top: 0;
  left: 0;
  height: inherit;
  width: inherit;
  /* background: white; */

  border-color: blue;

  padding: var(--padding);
  border-width: var(--borderWidth);
  border-radius: var(--borderRadius);
  border-style: solid;

  /* box-shadow: ${(p) => p.isFocused && '0 0 0px 6px white'}; */

  /* outline: ${(p) => p.isFocused && '4px solid whitesmoke'}; */
  /* outline-offset: 4px; */
  /* transition: box-shadow 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045); */
  /* border: 2px solid blue; */
  /* box-shadow: ${(p) => p.isFocused && '0 0 5px 2px deeppink'}; */

  /* box-shadow: ${(p) => p.isBlurred && '0 0 5px 2px transparent'}; */
`;

const Legend = styled.legend`
  position: relative;
  line-height: 0;
  padding: 0 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  margin-left: 1rem;
  opacity: 0;
`;

const Input = styled.input.attrs({
  type: 'text',
  id: 'text-input',
  name: 'text-input',
})`
  position: absolute;
  height: inherit;
  outline: none;
  padding: var(--padding);
  width: inherit;
  outline: none;
  border-radius: var(--borderRadius);

  border: var(--borderWidth) solid var(--baseGrey);

  &:focus,
  &:active {
    background: transparent;
    border: var(--borderWidth) solid transparent;
  }
  &:hover {
    border-color: ${(p) => !p.isFocused && 'black'};
  }

  border-color: ${(p) => p.isFocused && 'transparent'};
  /* background: ${(p) => p.isFocused && 'transparent'}; */
`;

const Label = styled.label.attrs({
  htmlFor: 'text-input',
})`
  position: absolute;
  left: 0;
  padding-left: var(--paddingLeftRight);
  transform: translate(1.5px, 1px);
  /* letter-spacing: 0.01ch; */
  /* top: var(--paddingTopBottom); */

  /* font-family: 'Arial', sans-serif;
  font-weight: 400;
  font-size: ${11.333 / 16}rem; */

  color: #797979;
  font-size: 13.333px;
  letter-spacing: initial;

  ${(p) =>
    p.isFocused
      ? rotateUp
      : p.isBlurred !== null && p.isBlurred
      ? rotateDown
      : null};
`;
