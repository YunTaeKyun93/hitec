import { StyledHelperText } from './styles';

interface HelperTextProps {
  text?: string;
  warned?: boolean;
}

const HelperText = ({ text, warned, ...props }: HelperTextProps) => {
  return (
    <StyledHelperText warned={warned ? 1 : 0} {...props}>
      {text}
    </StyledHelperText>
  );
};

export type { HelperTextProps };
export default HelperText;
