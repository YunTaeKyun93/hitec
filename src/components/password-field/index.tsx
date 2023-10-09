import { InputHTMLAttributes, useState, forwardRef } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { StyledTextFieldWrapper, StyledInputAndHelperText, StyledHelperText, StyledInputWrapper } from './styles';
import Label from '../label';
import Input from '../input';
import HelperText from '../helper-text';

// id === htmlFor 이기 때문에 동일한 id가 존재하면 안됩니다.

interface PasswordFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  id: string;
  defaultValue?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  visibility?: boolean;
  disabled?: boolean;
  warned?: boolean;
  onChange: (e: string) => void;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    { label, id, defaultValue, helperText, placeholder, required, visibility, disabled, warned, onChange, ...props },
    ref
  ) => {
    const [isVisibility, setIsVisibility] = useState<boolean>(false);

    return (
      <StyledTextFieldWrapper>
        <Label text={label} htmlFor={id} required={required} />
        <StyledInputAndHelperText>
          <StyledInputWrapper>
            <Input
              ref={ref}
              type={isVisibility ? 'text' : 'password'}
              id={id}
              defaultValue={defaultValue}
              onChange={onChange}
              required={required}
              disabled={disabled}
              placeholder={placeholder}
              warned={warned}
              {...props}
            />
            {visibility && !isVisibility && <Visibility onClick={() => setIsVisibility(true)} />}
            {visibility && isVisibility && <VisibilityOff onClick={() => setIsVisibility(false)} />}
          </StyledInputWrapper>
          {helperText && <HelperText text={helperText} warned={warned} />}
        </StyledInputAndHelperText>
      </StyledTextFieldWrapper>
    );
  }
);

PasswordField.displayName = 'PasswordField';
export type { PasswordFieldProps };
export default PasswordField;
