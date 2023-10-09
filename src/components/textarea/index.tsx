import React, { ChangeEvent, InputHTMLAttributes, useRef, forwardRef, useState } from 'react';
import { Cancel } from '@mui/icons-material';
import toHypenPhone from '@/utils/add-hypen';
import { StyledTextarea, StyledWrapper } from './styles';

interface TextareaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  onChange: (e: string) => void;
  defaultValue?: string;
  required?: boolean;
  removeAble?: boolean;
  disabled?: boolean;
  warned?: boolean;
  isHypenPhone?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ onChange, defaultValue, removeAble, disabled, required, warned, isHypenPhone, ...props }, ref) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [inputValue, setInputValue] = useState<string | undefined>(defaultValue);

    const changePhoneAddHypen = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const formatValue = toHypenPhone(e.target.value);
      e.target.value = formatValue;
    };

    const bubbleUpChangeEvent = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (isHypenPhone) {
        changePhoneAddHypen(e);
      }
      setInputValue(e.target.value);
      onChange(e.target.value);
    };

    const onClear = () => {
      if (!disabled) {
        if (ref && 'current' in ref && ref.current) {
          ref.current.value = '';
        }
        if (inputRef.current && ref == null) {
          inputRef.current.value = '';
        }
        setInputValue('');
        onChange('');
      }
    };

    return (
      <StyledWrapper>
        <StyledTextarea
          ref={ref || inputRef}
          onChange={bubbleUpChangeEvent}
          defaultValue={defaultValue}
          required={required}
          disabled={disabled}
          warned={warned ? 1 : 0}
          {...props}
        />
        {removeAble && inputValue != null && inputValue !== '' && !disabled && <Cancel onClick={onClear} />}
      </StyledWrapper>
    );
  }
);

Textarea.displayName = 'Textarea';
export type { TextareaProps };
export default Textarea;
