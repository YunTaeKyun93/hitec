import { LabelHTMLAttributes } from 'react';
import { StyledLabel, StyledStar } from './styles';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  required?: boolean;
  htmlFor?: string;
}

const Label = ({ text, htmlFor, required, ...props }: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      {text}
      {required && <StyledStar>*</StyledStar>}
    </StyledLabel>
  );
};

export default Label;
