import { InputHTMLAttributes, forwardRef } from 'react';
import { StyledTextFieldWrapper, StyledInputWrapper } from './styles';
import Label from '../label';
import Date from '../date';
import HelperText from '../helper-text';

// id === htmlFor 이기 때문에 동일한 id가 존재하면 안됩니다.

interface DateFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  id: string;
  defaultValue?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  removeAble?: boolean;
  disabled?: boolean;
  warned?: boolean;
  onChange: (e: string) => void;
}

const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  (
    { label, id, defaultValue, helperText, placeholder, required, removeAble, disabled, warned, onChange, ...props },
    ref
  ) => {
    return (
      <StyledTextFieldWrapper>
        <Label text={label} htmlFor={id} required={required} />
        <StyledInputWrapper>
          <Date
            ref={ref}
            id={id}
            defaultValue={defaultValue}
            onChange={onChange}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            warned={warned}
            {...props}
          />
          {helperText && <HelperText text={helperText} warned={warned} />}
        </StyledInputWrapper>
      </StyledTextFieldWrapper>
    );
  }
);

DateField.displayName = 'DateField';
export type { DateFieldProps };
export default DateField;
