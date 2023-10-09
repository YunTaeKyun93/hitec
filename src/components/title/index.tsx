import { StyledWrapper, StyledHeadline, StyledSectionName, StyledSubHeadline } from './style';
import LeafIcon from '../../../public/icons/leaf.svg';

interface Props {
  section?: string;
  title: string;
  subTitle?: string;
}
const Title: React.FC<Props> = ({ section, title, subTitle }) => {
  return (
    <StyledWrapper>
      <LeafIcon />
      {section && <StyledSectionName>{section}</StyledSectionName>}
      <StyledHeadline>{title}</StyledHeadline>
      {subTitle && <StyledSubHeadline>{subTitle}</StyledSubHeadline>}
    </StyledWrapper>
  );
};

export default Title;
