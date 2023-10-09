import { ChangeEvent, SelectHTMLAttributes } from 'react';
import { StyledSelectWrapper, StyledSelect, StyledOption, StyledSelectArrow } from './styles';

interface IndexSignature {
  [string: string | number]: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: IndexSignature;
  disabled?: boolean;
  selected?: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const defaultOptions = {
  default: '옵션을 넣어주세요',
};

// 추후 더 커지면 option을 따로 분리할 생각
const Select = ({ options = defaultOptions, disabled, selected, onChange, ...props }: SelectProps) => {
  return (
    <StyledSelectWrapper>
      <StyledSelect disabled={disabled} onChange={onChange} {...props}>
        {Object.entries(options).map(([key, value]) => (
          <StyledOption key={key} value={key} selected={key === selected}>
            {value}
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledSelectArrow />
    </StyledSelectWrapper>
  );
};

export type { IndexSignature, SelectProps };
export default Select;
