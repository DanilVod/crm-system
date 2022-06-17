import { AvatarContainer, AvatarHover, StyledAvatar } from './Avatar.style';

export type avatarSize = 'large' | 'medium' | 'small';
export interface AvatarProps {
  image: string;
  size?: avatarSize;
}

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <StyledAvatar {...props} src={props.image} data-testid="avatar" alt="avatar" />
      {props.size === 'large' && <AvatarHover size={props.size} />}
    </AvatarContainer>
  );
};

Avatar.defaultProps = {
  size: 'medium',
  isActive: false,
};
