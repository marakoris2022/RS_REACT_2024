import style from './loading.module.scss';
import React from 'react';

export const Loading = () => {
  return (
    <div className={style.loadingWrapper}>
      <p className={style.loadingTitle}>Loading...</p>
    </div>
  );
};
