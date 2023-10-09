import React, { InputHTMLAttributes } from 'react';
import { StyledRadio, StyledRadioWrapper, StyledFakeRadio, StyledLabel } from './style';
import { Color } from './types';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  label?: string;
  defaultChecked?: boolean;
  color: Color;
  disabled?: boolean;
  name: string;
  onChange: () => void;
}

const Radio: React.FC<RadioProps> = ({ htmlFor, name, disabled, label, defaultChecked, color, onChange, ...props }) => {
  return (
    <StyledRadioWrapper>
      <StyledRadio
        defaultChecked={defaultChecked}
        type="radio"
        id={htmlFor}
        name={name}
        disabled={disabled}
        onChange={onChange}
        color={color}
        {...props}
      />
      <StyledFakeRadio />
      <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
    </StyledRadioWrapper>
  );
};

export type { RadioProps };
export default Radio;
