import { useContext } from 'react';
import { Button } from '../button/Button';
import style from './pagination.module.scss';
import { ButtonType, PaginationProps } from '../../interface/interface';

export const Pagination = ({
  theme,
  pageNum,
  pokemonCount,
}: PaginationProps) => {
  const calculateTotalPages = (totalPokes: number) => {
    return Math.ceil(totalPokes / 10);
  };

  const handlePageClick = (num: number) => {};

  const handlePrevClick = () => {};

  const handleNextClick = () => {
    if (pageNum < calculateTotalPages(pokemonCount)) {
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
