import { ChangeEvent, SelectHTMLAttributes, forwardRef } from 'react';
import { StyledSelectFieldWrapper, StyledFieldsWrapper, StyledHelperText, StyledFields } from './styles';
import Label from '../label';
import Select, { IndexSignature } from '../select';
import Input from '../../components/input';
import HelperText from '../helper-text';

// id === htmlFor 이기 때문에 동일한 id가 존재하면 안됩니다.

interface SelectAndTextFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: IndexSignature;
  selected?: string;
  defaultValue?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  removeAble?: boolean;
  disabled?: boolean;
  warned?: boolean;
  onChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeText: (e: string) => void;
}

const SelectAndTextField = forwardRef<HTMLInputElement, SelectAndTextFieldProps>(
  (
    {
      label,
      id,
      options,
      defaultValue,
      selected,
      helperText,
      placeholder,
      required,
      removeAble,
      disabled,
      warned,
      onChangeSelect,
      onChangeText,
    },
    ref
  ) => {
    return (
      <StyledSelectFieldWrapper>
        <Label text={label} htmlFor={id} required={required} />
        <StyledFieldsWrapper>
          <StyledFields>
            <Select options={options} onChange={onChangeSelect} selected={selected} disabled={disabled} />
            <Input
              ref={ref}
              id={id}
              onChange={onChangeText}
              defaultValue={defaultValue}
              disabled={disabled}
              placeholder={placeholder}
              removeAble={removeAble}
              warned={warned}
            />
          </StyledFields>
          {helperText && <HelperText text={helperText} warned={warned} />}
        </StyledFieldsWrapper>
      </StyledSelectFieldWrapper>
    );
  }
);

SelectAndTextField.displayName = 'SelectAndTextField';
export type { SelectAndTextFieldProps };
export default SelectAndTextField;
