import { useNavigate } from 'react-router-dom';
import { Button } from '../button/Button';
import style from './newFoundPage.module.scss';
import ErrPoke from '/404page.png';
import { ButtonType } from '../../interface/interface';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <div className="container">
      <div className={style.imgWrapper}>
        <img
          className={style.errorImg}
          src={ErrPoke}
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
