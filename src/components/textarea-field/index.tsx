import { InputHTMLAttributes, forwardRef } from 'react';
import { StyledTextFieldWrapper, StyledTextareaWrapper } from './styles';
import Label from '../label';
import Textarea from '../textarea';
import HelperText from '../helper-text';

// id === htmlFor 이기 때문에 동일한 id가 존재하면 안됩니다.

interface TextareaFieldProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
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

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
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
        <StyledTextareaWrapper>
          <Textarea
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
        </StyledTextareaWrapper>
      </StyledTextFieldWrapper>
    );
  }
);

TextareaField.displayName = 'TextareaField';
export type { TextareaFieldProps };
export default TextareaField;
