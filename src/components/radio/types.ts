import { InputHTMLAttributes } from 'react';

type Size = 'small' | 'medium' | 'large' | 'full';
type Color = 'primary' | 'secondary' | 'black' | 'white';
type Variant = 'outline' | 'fulled';
type IconPosition = 'left' | 'right';

interface VariantAndColorSet {
  variant: Variant;
  color: Color;
  theme: any;
}

interface StyledRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  color: Color;
}

export type { Size, Color, Variant, IconPosition, VariantAndColorSet, StyledRadioProps };
