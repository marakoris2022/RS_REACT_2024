import style from './pokemonIcon.module.scss';
import DEFAULT_IMAGE from '../../../public/pokeball.svg';

type PokemonIconProps = {
  width: number;
  src: string;
  alt: string;
};

export const PokemonIcon = (props: PokemonIconProps) => {
  const { width, src, alt } = props;

  return (
    <div style={{ width, height: width }} className={style.pokemonIconWrapper}>
      <img
        className={style.pokemonIcon}
        width={width}
        src={src}
        alt={alt}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = DEFAULT_IMAGE;
        }}
      />
    </div>
  );
};
