import { firstLetterUppercase } from '../../../utils/utils';
import { PokemonIcon } from '../../pokemon-icon/PokemonIcon';
import style from './sectionCard.module.scss';
import { PokemonData } from '../../../interface/interface';
import { themeSettings, ThemeType } from 'src/store/theme';
import { useNavigate } from '@remix-run/react';

type SectionCardProps = {
  pokemon: PokemonData;
  theme: ThemeType;
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export const SectionCard = ({ pokemon, theme }: SectionCardProps) => {
  const navigate = useNavigate();

  const themeURL = theme.theme === 'Light' ? 'light' : 'dark';

  function handleClick() {
    navigate(`/pokemon/${themeURL}/${pokemon.name.toLowerCase()}`);
  }

  return (
    <div
      style={{
        background: theme.cardBackground,
        border: theme.cardBorder,
      }}
      data-testid="cardWrapper"
      className={style.cardWrapper}
      onClick={handleClick}
    >
      <div className={style.titleWrapper}>
        <h2 className={style.cardTitle}>
          {firstLetterUppercase(pokemon.name)}
        </h2>
        <div
          style={{ background: theme.iconBackground }}
          className={style.iconWrapper}
        >
          <PokemonIcon
            width={100}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
      </div>
      <div className={style.contentWrapper}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={style.checkboxWrapper}
        >
          {/* <CardCheckbox pokemon={pokemon} /> */}
        </div>

        <div>
          <span className={style.contentTitle}>Type:</span>
          {firstLetterUppercase(pokemon.types[0].type.name)}
        </div>
        <div>
          <span className={style.contentTitle}>Experience:</span>
          {pokemon.base_experience}
        </div>
        <div>
          <span className={style.contentTitle}>Weight:</span>
          {pokemon.weight}
        </div>
      </div>
    </div>
  );
};
