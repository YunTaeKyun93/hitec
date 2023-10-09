import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';
import { Size, Color, Variant, IconPosition } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  variant?: Variant;
  size?: Size;
  text: string;
  disabled?: boolean;
  icon?: string;
  iconPosition?: IconPosition;
  onClick?: () => void;
}

const Button = ({
  type = 'button',
  color = 'primary',
  size = 'medium',
  text,
  variant = 'fulled',
  icon,
  disabled,
  iconPosition,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      {...props}
      size={size}
      color={color}
      variant={variant}
      disabled={disabled}
      icon={icon}
      iconPosition={iconPosition}
    >
      {icon && <span className="material-symbols-rounded">{icon}</span>}
      {text}
    </StyledButton>
  );
};

export type { Variant, ButtonProps };
export default Button;
