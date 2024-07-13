import { useEffect, useState } from 'react';
import { PokemonData } from '../../api/restApi';
import style from './pokemonCard.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { firstLetterUppercase, updateQueryParams } from '../../utils/utils';
import { Button, ButtonType } from '../button/Button';
import { PokemonIcon } from '../pokemon-icon/PokemonIcon';
import ExpIco from '/exp-ico.svg';
import AbilIco from '/abil-ico.svg';
import ItemsIco from '/items-ico.svg';
import SpecialIco from '/special-ico.svg';
import StatsIco from '/stats-ico.svg';

type CardSectionProps = {
  cardSelected: PokemonData | null;
  setCardSelected: React.Dispatch<React.SetStateAction<PokemonData | null>>;
};

export const PokemonCard = ({
  cardSelected,
  setCardSelected,
}: CardSectionProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (cardSelected) {
      updateQueryParams({ pokename: cardSelected?.name! }, navigate, location);
      setActive(true);
    }
  }, [cardSelected]);

  function handleClick(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) {
    const target = e.target as HTMLElement;
    if (target.id === 'close-card-back' || target.id === 'close-card-btn') {
      setActive(false);
      updateQueryParams({ pokename: '' }, navigate, location);
      setTimeout(() => {
        setCardSelected(null);
      }, 300);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`${style.background} ${active ? style.backgroundActive : ''}`}
      id="close-card-back"
    >
      <div className={style.wrapper}>
        <Button
          id="close-card-btn"
          title="X"
          onClick={handleClick}
          btnType={ButtonType.RED}
        />

        {cardSelected ? (
          <div className={style.pokemonCardWrapper}>
            <p className={style.pokemonCardTitle}>
              {firstLetterUppercase(cardSelected.name)}
            </p>
            <div className={style.iconsWrapper}>
              <PokemonIcon
                width={120}
                src={cardSelected.sprites.front_default}
                alt="pokemon_img"
              />
              <PokemonIcon
                width={120}
                src={cardSelected.sprites.back_default}
                alt="pokemon_img"
              />
            </div>
            <p>
              Experience: {cardSelected.base_experience}{' '}
              <img width={12} src={ExpIco} alt="Exp" />
            </p>
            <h3 className={style.cardH3}>
              Stats <img width={14} src={StatsIco} alt="Stats" /> :
            </h3>
            <ul className={style.cardUl}>
              {cardSelected.stats.length > 0 ? (
                cardSelected.stats.map((stat) => {
                  return (
                    <li key={stat.stat.name} className={style.cardLi}>
                      <div className={style.statItemWrapper}>
                        <div
                          className={
                            stat.stat.name === 'hp'
                              ? style.statNameHp
                              : style.statName
                          }
                        >
                          {firstLetterUppercase(stat.stat.name)}
                        </div>
                        {stat.stat.name === 'hp' ? (
                          <div className={style.statValueHp}>
                            {`${stat.base_stat} / ${stat.base_stat}`}
                          </div>
                        ) : (
                          <div className={style.statValue}>
                            {stat.base_stat}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className={style.cardLi}>Empty</li>
              )}
            </ul>
            <div className={style.abilItemsWrapper}>
              <div style={{ width: '100%' }}>
                <h3 className={style.cardH3}>
                  Abilities <img width={14} src={AbilIco} alt="Abil" /> :
                </h3>
                <ul className={style.cardUl}>
                  {cardSelected.abilities.length > 0 ? (
                    cardSelected.abilities.map((abil) => {
                      return (
                        <li key={abil.ability.name} className={style.cardLi}>
                          {firstLetterUppercase(abil.ability.name)}
                        </li>
                      );
                    })
                  ) : (
                    <li className={style.cardLi}>No any Abilities.</li>
                  )}
                </ul>
              </div>
              <div style={{ width: '100%' }}>
                <h3 className={style.cardH3}>
                  Items <img width={14} src={ItemsIco} alt="Items" /> :
                </h3>
                <ul className={style.cardUl}>
                  {cardSelected.held_items.length > 0 ? (
                    cardSelected.held_items.map((item) => {
                      return (
                        <li key={item.item.name} className={style.cardLi}>
                          {firstLetterUppercase(item.item.name)}
                        </li>
                      );
                    })
                  ) : (
                    <li className={style.cardLi}>Empty</li>
                  )}
                </ul>
              </div>
            </div>
            <div className={style.specMovesWrapper}>
              <h3 className={style.cardH3}>
                Special Moves <img width={14} src={SpecialIco} alt="Special" />{' '}
                :
              </h3>
              <ul className={style.cardUl}>
                {cardSelected.moves.length > 0 ? (
                  cardSelected.moves.map((move) => {
                    return (
                      <li key={move.move.name} className={style.cardLi}>
                        {firstLetterUppercase(move.move.name)}
                      </li>
                    );
                  })
                ) : (
                  <li className={style.cardLi}>Empty</li>
                )}
              </ul>
            </div>
            <div className={style.bodyCharatWrapper}>
              <p>Height: {cardSelected.height}</p>
              <p>Weight: {cardSelected.weight}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
