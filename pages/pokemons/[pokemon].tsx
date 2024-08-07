import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getPokemonDataByName } from '../../src/api/restApi';
import style from '../../styles/pokemon.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../src/store/theme';
import { PokemonCard } from '../../src/components/card-section/PokemonCard';
import { PokemonData } from '../../src/interface/interface';

interface CardProps {
  pokemon: PokemonData;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { pokemon } = context.params!;
  try {
    const response = await getPokemonDataByName(pokemon as string);
    return {
      props: { pokemon: response },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker } = themeContext;

  const appStyle = {
    color: themePicker.color,
    backgroundImage: themePicker.mainBackground,
  };

  return (
    <div style={appStyle} className={style.pageWrapper}>
      <div className="container">
        <div className={style.contentWrapper}>
          <PokemonCard cardSelected={pokemon} />
        </div>
      </div>
    </div>
  );
};

export default Card;
