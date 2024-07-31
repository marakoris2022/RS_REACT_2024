import { Button } from '../src/components/button/Button';
import style from '../styles/404.module.scss';
import ErrPoke from '../public/404page.png';
import { ButtonType } from '../src/interface/interface';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
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
};

export default NotFoundPage;
