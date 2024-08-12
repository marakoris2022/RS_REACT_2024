import style from './pokemonCard.module.scss';
import { CardHeader } from './components/CardHeader';
import { CardIcons } from './components/CardIcons';
import { CardStats } from './components/CardStats';
import { CardAbilities } from './components/CardAbilities';
import { CardItems } from './components/CardItems';
import { CardSpecialMoves } from './components/CardSpecialMoves';
import { CardBodyCharacteristics } from './components/CardBodyCharacteristics';
import { PokemonData } from 'src/interface/interface';
import { ThemeType } from 'src/store/theme';
import { useNavigate } from '@remix-run/react';

export const PokemonCard = ({
  cardSelected,
  themePicker,
}: {
  cardSelected: PokemonData;
  themePicker: ThemeType;
}) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <main
      className={style.mainWrapper}
      style={{ backgroundImage: themePicker.mainBackground }}
      onClick={handleClick}
    >
      {cardSelected ? (
        <CardHeader
          themePicker={themePicker}
          cardSelected={cardSelected}
          handleClick={handleClick}
        >
          <>
            <CardIcons themePicker={themePicker} cardSelected={cardSelected} />
            <CardStats themePicker={themePicker} cardSelected={cardSelected} />
            <div className={style.abilItemsWrapper}>
              <CardAbilities
                themePicker={themePicker}
                cardSelected={cardSelected}
              />
              <CardItems
                themePicker={themePicker}
                cardSelected={cardSelected}
              />
            </div>
            <CardSpecialMoves
              themePicker={themePicker}
              cardSelected={cardSelected}
            />
            <CardBodyCharacteristics
              themePicker={themePicker}
              cardSelected={cardSelected}
            />
          </>
        </CardHeader>
      ) : null}
    </main>
  );
};
