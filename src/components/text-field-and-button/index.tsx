import { InputHTMLAttributes, forwardRef } from 'react';
import { StyledTextFieldWrapper, StyledInputWrapper, StyledHelperText, StyledInputAndButton } from './styles';
import Label from '../label';
import Input from '../../components/input';
import Button from '../button';
import HelperText from '../helper-text';

// id === htmlFor 이기 때문에 동일한 id가 존재하면 안됩니다.

interface TextFieldAndButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  id: string;
  buttonText: string;
  defaultValue?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  removeAble?: boolean;
  disabled?: boolean;
  warned?: boolean;
  isHypenPhone?: boolean;
  onChange: (e: string) => void;
  onClickButton: () => void;
}

const TextFieldAndButton = forwardRef<HTMLInputElement, TextFieldAndButtonProps>(
  (
    {
      label,
      id,
      buttonText,
      defaultValue,
      helperText,
      placeholder,
      required,
      removeAble,
      disabled,
      warned,
      isHypenPhone,
      onChange,
      onClickButton,
      ...props
    },
    ref
  ) => {
    return (
      <StyledTextFieldWrapper>
        <Label text={label} htmlFor={id} required={required} />
        <StyledInputWrapper>
          <StyledInputAndButton>
            <Input
              ref={ref}
              id={id}
              defaultValue={defaultValue}
              onChange={onChange}
              required={required}
              disabled={disabled}
              removeAble={removeAble}
              placeholder={placeholder}
              isHypenPhone={isHypenPhone}
              warned={warned}
              {...props}
            />
            <Button text={buttonText} color="black" onClick={onClickButton} disabled={disabled} />
          </StyledInputAndButton>
          {helperText && <HelperText text={helperText} warned={warned} />}
        </StyledInputWrapper>
      </StyledTextFieldWrapper>
    );
  }
);

TextFieldAndButton.displayName = 'TextFieldAndButton';
export default TextFieldAndButton;
