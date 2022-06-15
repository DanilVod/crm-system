import { ReactNode } from 'react';
import { ColorsName } from '@/constants/global.styles';
import { StyledButton } from './Button.style';

//
export interface IButton {
  color?: ColorsName;
  onclick?: () => void;
  type?: 'normal' | 'outlined' | 'empty';
  children: ReactNode;
}

export const Button = (props: IButton) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
