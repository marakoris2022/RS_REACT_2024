import { PokemonData } from '../../api/restApi';
import { Button, ButtonType } from '../button/Button';
import style from './pagination.module.scss';

type PaginationProps = {
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pokemonList: PokemonData[];
};

export const Pagination = ({
  pageNum,
  setPageNum,
  pokemonList,
}: PaginationProps) => {
  function calculateTotalPages(totalPokes: number) {
    return Math.ceil(totalPokes / 10);
  }

  function handlePageClick(num: number) {
    setPageNum(num);
  }

  function handlePrevClick() {
    if (pageNum > 1) {
      setPageNum((prev) => prev - 1);
    }
  }

  function handleNextClick() {
    if (pageNum < calculateTotalPages(pokemonList.length)) {
      setPageNum((prev) => prev + 1);
    }
  }

  return (
    <div className={style.wrapper}>
      <div>Pokemon's found: {pokemonList.length}</div>

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
        onClick={() => handlePageClick(calculateTotalPages(pokemonList.length))}
        title={String(calculateTotalPages(pokemonList.length))}
        btnType={ButtonType.GREEN}
      />
    </div>
  );
};
