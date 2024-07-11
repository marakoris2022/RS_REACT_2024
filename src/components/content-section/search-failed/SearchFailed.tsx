import style from './searchFailed.module.scss';

export const SearchFailed = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>No Pokemon's with this Search request...</p>
    </div>
  );
};
