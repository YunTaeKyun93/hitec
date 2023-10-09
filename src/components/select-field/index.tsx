import { ChangeEvent, SelectHTMLAttributes } from 'react';
import { StyledSelectFieldWrapper, StyledSelectWrapper } from './styles';
import Label from '../label';
import Select, { IndexSignature } from '../select';
import HelperText from '../helper-text';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: IndexSignature;
  selected?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  warned?: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = ({
  label,
  id,
  options,
  selected,
  helperText,
  required,
  disabled,
  warned,
  onChange,
  ...props
}: SelectFieldProps) => {
  return (
    <StyledSelectFieldWrapper>
      <Label text={label} htmlFor={id} required={required} />
      <StyledSelectWrapper>
        <Select id={id} options={options} onChange={onChange} disabled={disabled} selected={selected} {...props} />
        {helperText && <HelperText text={helperText} warned={warned} />}
      </StyledSelectWrapper>
    </StyledSelectFieldWrapper>
  );
};

export type { SelectFieldProps };
export default SelectField;
