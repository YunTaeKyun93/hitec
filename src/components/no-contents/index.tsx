import { StyledNoContents, StyledTitle } from './style';

interface Props {
  title: string;
}
const NoContents: React.FC<Props> = ({ title }) => {
  return (
    <StyledNoContents>
      <StyledTitle>{title}</StyledTitle>
    </StyledNoContents>
  );
};

export default NoContents;
