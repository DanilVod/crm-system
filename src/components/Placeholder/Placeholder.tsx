import { colors } from '@/constants/global.styles';
import { InputTypes } from '@/types/share';
import React, { useState } from 'react';
import { Dispatch } from 'react';
import styled from 'styled-components';

interface PlaceholderProps {
  type?: InputTypes;
  label?: string;
  onInputText?: Dispatch<string>;
  placeholderText?: string;
  value?: string;
}

const StyledPlaceholder = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  position: relative;
  min-width: 302px;
  height: 48px;
`;

const PlaceholderValue = styled.input`
  background: none;
  border: none;
  outline: none;
`;
const PlaceholderLine = styled.div`
  position: absolute;
  bottom: 0;
  height: 1px;
  width: -webkit-fill-available;
  border-bottom: 1px solid ${colors['textLine']};
`;
const PlaceholderLineActive = styled(PlaceholderLine)`
  border-bottom: 1px solid ${colors['textHelpGray']};
`;
const PlaceholderLabel = styled.label`
  font-size: 11px;
  color: ${colors['textHelpGray']};
  font-weight: 500;
  transition: ease-in-out 0.3s;
  ${PlaceholderValue}:focus-within ~ & {
    color: ${colors['accentBlue']};
  }
`;

export const Placeholder = (props: PlaceholderProps) => {
  const [isFocus, setIsFocus] = useState(false);
  let inputHandler;
  if (props.onInputText) {
    inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const enteredName = event.target.value;
      //@ts-ignore
      props.onInputText(enteredName);
    };
  }

  return (
    <StyledPlaceholder {...props}>
      <PlaceholderValue
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={inputHandler}
        placeholder={props.placeholderText}
        value={props.value}
        disabled={props.type === 'show'}></PlaceholderValue>
      {props.type != 'new' && <PlaceholderLabel>{props.label}</PlaceholderLabel>}
      {props.type != 'show' && (isFocus ? <PlaceholderLineActive /> : <PlaceholderLine />)}
    </StyledPlaceholder>
  );
};
Placeholder.defaultProps = {
  type: 'default',
};
