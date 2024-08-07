import style from './pokemonIcon.module.scss';
import DEFAULT_IMAGE from '../../../public/pokeball.svg';
import Image from 'next/image';

type PokemonIconProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

export const PokemonIcon = (props: PokemonIconProps) => {
  const { width, height, src, alt } = props;

  return (
    <div style={{ width, height: width }} className={style.pokemonIconWrapper}>
      <Image
        className={style.pokemonIcon}
        width={src ? width : width * 0.3}
        height={height}
        src={src ?? DEFAULT_IMAGE.src}
        alt={alt}
      />
    </div>
  );
};
