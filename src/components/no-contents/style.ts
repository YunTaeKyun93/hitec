import { Paragraph3 } from '@/styles/typography';
import { styled } from 'styled-components';

const StyledNoContents = styled.div`
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled(Paragraph3)`
  color: ${({ theme }) => theme.color.gray};
  text-align: center;
`;

export { StyledNoContents, StyledTitle };
