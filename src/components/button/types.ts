import { ButtonHTMLAttributes } from 'react';

type Size = 'small' | 'medium' | 'large' | 'full';
type Color = 'primary' | 'secondary' | 'black' | 'white';
type Variant = 'outline' | 'fulled';
type IconPosition = 'left' | 'right';

interface VariantAndColorSet {
  variant: Variant;
  color: Color;
  theme: any;
}

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  color: Color;
  variant: Variant;
  disabled?: boolean;
  icon?: string;
  iconPosition?: IconPosition;
}

export type { Size, Color, Variant, IconPosition, VariantAndColorSet, StyledButtonProps };
