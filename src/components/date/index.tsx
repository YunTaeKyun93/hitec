import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import { StyledInput, StyledWrapper } from './styles';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (e: string) => void;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  warned?: boolean;
}

const Date = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, defaultValue, disabled, required, warned, ...props }, ref) => {
    const bubbleUpChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <StyledWrapper>
        <StyledInput
          ref={ref}
          type="date"
          onChange={bubbleUpChangeEvent}
          defaultValue={defaultValue}
          required={required}
          disabled={disabled}
          warned={warned}
          {...props}
        />
      </StyledWrapper>
    );
  }
);

Date.displayName = 'Date';
export default Date;
