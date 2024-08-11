'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '../src/components/button/Button';
import { ButtonType } from '../src/interface/interface';
import style from './error.module.scss';
import ErrPoke from '../public/404page.png';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();
  function handleClick() {
    router.push('/');
  }

  return (
    <div className="container">
      <div className={style.imgWrapper}>
        <img
          className={style.errorImg}
          src={ErrPoke.src}
          alt="404 Page Not Found"
        />
        <div className={style.btnContainer}>
          <Button
            title="To Main"
            btnType={ButtonType.GREEN}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
