import { StyledWrapper } from './style';

interface Props {
  height?: string;
}

const LoadingCircle: React.FC<Props> = ({ height }) => {
  return (
    <StyledWrapper style={{ height }}>
      <div />
    </StyledWrapper>
  );
};

export default LoadingCircle;
