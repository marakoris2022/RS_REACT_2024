import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPokemonDataByName } from 'src/api/restApi';
import { PokemonCard } from 'src/components/card-section/PokemonCard';
import { PokemonData } from 'src/interface/interface';
import { themeSettings } from 'src/store/theme';

export async function loader({ params }: LoaderFunctionArgs) {
  const { theme, pokemonName } = params;
  if (!pokemonName) {
    throw new Response('Not Found', { status: 404 });
  }
  const pokemonData = await getPokemonDataByName(pokemonName);
  return { theme, pokemonData };
}

export default function PokemonCardPage() {
  const { pokemonData, theme } = useLoaderData<{
    pokemonData: PokemonData;
    theme: string;
  }>();

  const themePicker =
    theme === 'light' ? themeSettings.light : themeSettings.dark;

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return <PokemonCard themePicker={themePicker} cardSelected={pokemonData} />;
}
