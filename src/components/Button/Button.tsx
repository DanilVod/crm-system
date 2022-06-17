import { ReactNode } from 'react';
import { ColorsName } from '@/constants/global.styles';
import { StyledButton } from './Button.style';

export type buttonType = 'normal' | 'outlined' | 'empty';
export interface IButton {
  color: ColorsName;
  onclick?: () => void;
  type: buttonType;
  children: ReactNode;
}

export const Button = (props: IButton) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
Button.defaultProps = {
  color: 'none',
  type: 'normal',
};
