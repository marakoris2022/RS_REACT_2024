import { useContext, useEffect } from 'react';
import { Button } from '../button/Button';
import style from './pagination.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../utils/utils';
import { ButtonType, PaginationProps } from '../../interface/interface';
import { ThemeContext } from '../../store/theme';

export const Pagination = ({
  pageNum,
  setPageNum,
  pokemonListLength,
}: PaginationProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const theme = useContext(ThemeContext);
  let frontpage = queryParams.get('frontpage');

  const calculateTotalPages = (totalPokes: number) => {
    return Math.ceil(totalPokes / 10);
  };

  const handlePageClick = (num: number) => {
    setPageNum(num);
    updateQueryParams({ frontpage: String(num) }, navigate, location);
  };

  const handlePrevClick = () => {
    if (pageNum > 1) {
      setPageNum((prev) => prev - 1);
      updateQueryParams(
        { frontpage: String(Number(frontpage) - 1) },
        navigate,
        location
      );
    }
  };

  const handleNextClick = () => {
    if (pageNum < calculateTotalPages(pokemonListLength)) {
      setPageNum((prev) => prev + 1);
      updateQueryParams(
        { frontpage: String(Number(frontpage) + 1) },
        navigate,
        location
      );
    }
  };

  useEffect(() => {
    if (!frontpage) frontpage = '1';
    if (Number(frontpage) > calculateTotalPages(pokemonListLength)) {
      frontpage = String(calculateTotalPages(pokemonListLength));
    }
    setPageNum(Number(frontpage));
    updateQueryParams({ frontpage: frontpage }, navigate, location);
  }, [pageNum]);

  return (
    <div style={{ background: theme.menuBackground }} className={style.wrapper}>
      <div>Pokes found: {pokemonListLength}</div>

      <div className={style.paginationSettings}>
        <Button
          onClick={() => handlePageClick(1)}
          title="1"
          btnType={ButtonType.GREEN}
        />

        <Button
          onClick={handlePrevClick}
          title="Prev"
          btnType={ButtonType.GREEN}
        />

        <div>
          {pageNum} / {calculateTotalPages(pokemonListLength)}
        </div>

        <Button
          onClick={handleNextClick}
          title="Next"
          btnType={ButtonType.GREEN}
        />

        <Button
          onClick={() =>
            handlePageClick(calculateTotalPages(pokemonListLength))
          }
          title={String(calculateTotalPages(pokemonListLength))}
          btnType={ButtonType.GREEN}
        />
      </div>
    </div>
  );
};
