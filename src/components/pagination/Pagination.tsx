import { useContext, useEffect } from 'react';
import { Button } from '../button/Button';
import style from './pagination.module.scss';
import { ButtonType, PaginationProps } from '../../interface/interface';
import { ThemeContext } from '../../store/theme';
import { useGlobalState } from '../../store/GlobalStateContext';

export const Pagination = ({ totalPokes }: PaginationProps) => {
  const themeContext = useContext(ThemeContext);
  const { state, setState } = useGlobalState();

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme } = themeContext;

  const calculateTotalPages = (totalPokes: number) => {
    return Math.ceil(totalPokes / 10);
  };

  const handlePageClick = (num: number) => {
    setState((state) => {
      return {
        ...state,
        pageNumber: num,
      };
    });
  };

  const handlePrevClick = () => {
    if (state.pageNumber > 1) {
      setState((state) => {
        return {
          ...state,
          pageNumber: state.pageNumber - 1,
        };
      });
    }
  };

  const handleNextClick = () => {
    if (state.pageNumber < calculateTotalPages(totalPokes)) {
      setState((state) => {
        return {
          ...state,
          pageNumber: state.pageNumber + 1,
        };
      });
    }
  };

  useEffect(() => {
    if (state.pageNumber > calculateTotalPages(totalPokes)) {
      setState((state) => {
        return {
          ...state,
          pageNumber: 1,
        };
      });
    }
  }, [state.pageNumber]);

  return (
    <div style={{ background: theme.menuBackground }} className={style.wrapper}>
      <div>Pokes found: {totalPokes}</div>

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
          {state.pageNumber} / {calculateTotalPages(totalPokes)}
        </div>

        <Button
          onClick={handleNextClick}
          title="Next"
          btnType={ButtonType.GREEN}
        />

        <Button
          onClick={() => handlePageClick(calculateTotalPages(totalPokes))}
          title={String(calculateTotalPages(totalPokes))}
          btnType={ButtonType.GREEN}
        />
      </div>
    </div>
  );
};
