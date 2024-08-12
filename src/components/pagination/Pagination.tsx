import { useContext } from 'react';
import { Button } from '../button/Button';
import style from './pagination.module.scss';
import { ButtonType, PaginationProps } from '../../interface/interface';
import { useNavigate } from '@remix-run/react';

export const Pagination = ({
  searchValue,
  theme,
  pageNum,
  pokemonCount,
}: PaginationProps) => {
  const navigate = useNavigate();

  const calculateTotalPages = (totalPokes: number) => {
    return Math.ceil(totalPokes / 10);
  };

  if (searchValue === '') searchValue = 'empty';
  const themeURL = theme.theme === 'Light' ? 'light' : 'dark';

  const handlePageClick = (num: number) => {
    navigate(`/${themeURL}/${num}/${searchValue}`);
  };

  const handlePrevClick = () => {
    if (pageNum > 1) {
      navigate(`/${themeURL}/${pageNum - 1}/${searchValue}`);
    }
  };

  const handleNextClick = () => {
    if (pageNum < calculateTotalPages(pokemonCount)) {
      navigate(`/${themeURL}/${pageNum + 1}/${searchValue}`);
    }
  };

  return (
    <div style={{ background: theme.menuBackground }} className={style.wrapper}>
      <div>Pokes found: {pokemonCount}</div>

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
          {pageNum} / {calculateTotalPages(pokemonCount)}
        </div>

        <Button
          onClick={handleNextClick}
          title="Next"
          btnType={ButtonType.GREEN}
        />

        <Button
          onClick={() => handlePageClick(calculateTotalPages(pokemonCount))}
          title={String(calculateTotalPages(pokemonCount))}
          btnType={ButtonType.GREEN}
        />
      </div>
    </div>
  );
};
