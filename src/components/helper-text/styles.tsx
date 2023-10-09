import styled from 'styled-components';

interface StyledHelperTextProps {
  warned?: number;
}

const StyledHelperText = styled.span<StyledHelperTextProps>`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme, warned }) => (warned ? theme.color.error : theme.color.g800)};
`;

export { StyledHelperText };
