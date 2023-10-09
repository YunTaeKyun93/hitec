import { InputHTMLAttributes, forwardRef } from 'react';
import { StyledTextFieldWrapper, StyledInputWrapper } from './styles';
import Label from '../label';
import Input from '../../components/input';
import HelperText from '../helper-text';

// id === htmlFor 이기 때문에 동일한 id가 존재하면 안됩니다.

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  id: string;
  defaultValue?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  removeAble?: boolean;
  disabled?: boolean;
  warned?: boolean;
  isHypenPhone?: boolean;
  onChange: (e: string) => void;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      id,
      defaultValue,
      helperText,
      placeholder,
      required,
      removeAble,
      disabled,
      warned,
      isHypenPhone,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <StyledTextFieldWrapper>
        <Label text={label} htmlFor={id} required={required} />
        <StyledInputWrapper>
          <Input
            ref={ref}
            id={id}
            defaultValue={defaultValue}
            onChange={onChange}
            required={required}
            disabled={disabled}
            removeAble={removeAble}
            placeholder={placeholder}
            warned={warned}
            isHypenPhone={isHypenPhone}
            {...props}
          />
          {helperText && <HelperText text={helperText} warned={warned} />}
        </StyledInputWrapper>
      </StyledTextFieldWrapper>
    );
  }
);

TextField.displayName = 'TextField';
export type { TextFieldProps };
export default TextField;
