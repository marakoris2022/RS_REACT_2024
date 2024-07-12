import React, { useEffect } from 'react';
import { PokemonData } from '../../api/restApi';
import { Button, ButtonType } from '../button/Button';
import style from './pagination.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../utils/utils';

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
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
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
    if (pageNum < calculateTotalPages(pokemonList.length)) {
      setPageNum((prev) => prev + 1);
      updateQueryParams(
        { frontpage: String(Number(frontpage) + 1) },
        navigate,
        location
      );
    }
  };

  useEffect(() => {
    if (frontpage) {
      if (Number(frontpage) > calculateTotalPages(pokemonList.length)) {
        frontpage = String(calculateTotalPages(pokemonList.length));
      }
      setPageNum(Number(frontpage));
      updateQueryParams({ frontpage: frontpage }, navigate, location);
    }
  }, []);

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
