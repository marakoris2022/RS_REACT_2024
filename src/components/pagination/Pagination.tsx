import { useContext, useEffect } from 'react';
import { Button } from '../button/Button';
import style from './pagination.module.scss';
import { updateQueryParams } from '../../utils/utils';
import { ButtonType, PaginationProps } from '../../interface/interface';
import { ThemeContext } from '../../store/theme';

export const Pagination = ({
  pageNum,
  setPageNum,
  pokemonList,
}: PaginationProps) => {
  const queryParams = new URLSearchParams(location.search);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme } = themeContext;

  let frontpage = queryParams.get('frontpage');

  const calculateTotalPages = (totalPokes: number) => {
    return Math.ceil(totalPokes / 10);
  };

  const handlePageClick = (num: number) => {
    setPageNum(num);
  };

  const handlePrevClick = () => {
    if (pageNum > 1) {
      setPageNum((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNum < calculateTotalPages(pokemonList.length)) {
      setPageNum((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!frontpage) frontpage = '1';
    if (Number(frontpage) > calculateTotalPages(pokemonList.length)) {
      frontpage = String(calculateTotalPages(pokemonList.length));
    }
    setPageNum(Number(frontpage));
  }, []);

  return (
    <div style={{ background: theme.menuBackground }} className={style.wrapper}>
      <div>Pokes found: {pokemonList.length}</div>

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
          {pageNum} / {calculateTotalPages(pokemonList.length)}
        </div>

        <Button
          onClick={handleNextClick}
          title="Next"
          btnType={ButtonType.GREEN}
        />

        <Button
          onClick={() =>
            handlePageClick(calculateTotalPages(pokemonList.length))
          }
          title={String(calculateTotalPages(pokemonList.length))}
          btnType={ButtonType.GREEN}
        />
      </div>
    </div>
  );
};
