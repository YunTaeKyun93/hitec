import { useRouter } from 'next/router';
import usePagination from '@/hooks/use-pagination';
import { StyledWrapper, StyledPagination, StyledPaginationItem } from './style';

interface Props {
  className?: string;
  count?: number;
  viewCount?: number;
}

const Pagination: React.FC<Props> = ({ className, count = 0, viewCount = 0 }) => {
  const router = useRouter();
  const { navigators, onPrevPage, onNextPage } = usePagination({ count, viewCount });

  /* 전체 길이가 한페이지에 보여줘야할 길이보다 작거나 같으면 안보여줄거임  */
  if (count <= viewCount) {
    return <div />;
  }

  return (
    <StyledWrapper>
      <StyledPagination>
        <StyledPaginationItem role="presentation" onClick={onPrevPage}>
          <div className="left-icon" />
        </StyledPaginationItem>
        {navigators.map(page => {
          const queryPage = router.query.page === undefined ? '0' : router.query.page;
          return (
            <StyledPaginationItem
              key={page}
              active={queryPage === String(page - 1) ? 1 : 0}
              role="presentation"
              onClick={() => router.push({ query: { ...router.query, page: page - 1 } })}
            >
              {page}
            </StyledPaginationItem>
          );
        })}
        <StyledPaginationItem role="presentation" onClick={onNextPage}>
          <div className="right-icon" />
        </StyledPaginationItem>
      </StyledPagination>
    </StyledWrapper>
  );
};

export default Pagination;
