import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import {
  getPokemonDataByNames,
  searchPokemonListByName,
} from 'src/api/restApi';
import { ContentSection } from 'src/components/content-section/ContentSection';
import { MainSection } from 'src/components/main-section/MainSection';
import { Pagination } from 'src/components/pagination/Pagination';
import { SearchSection } from 'src/components/search-section/SearchSection';
import { PokemonData, PokemonListData } from 'src/interface/interface';
import { themeSettings } from 'src/store/theme';

export async function loader({ params }: LoaderFunctionArgs) {
  let { theme, page, searchValue } = params;

  if (searchValue === 'empty') searchValue = '';

  const pokemonList = await searchPokemonListByName(searchValue!);
  const totalPokes = pokemonList.count;

  function getPaginatePokemonList(
    pokemonList: PokemonListData,
    pageNum: number
  ) {
    if (pageNum * 10 > totalPokes) {
      return pokemonList.results.slice((pageNum - 1) * 10);
    }
    return pokemonList.results.slice(
      (pageNum - 1) * 10,
      (pageNum - 1) * 10 + 10
    );
  }

  const viewPokemonList = getPaginatePokemonList(pokemonList, Number(page));
  const viewPokemonListData = await getPokemonDataByNames(viewPokemonList);
  const usedTheme = theme;

  return {
    page,
    usedTheme,
    viewPokemonListData,
    totalPokes,
    searchValue,
  };
}

export const ContentPage = () => {
  const { page, usedTheme, viewPokemonListData, totalPokes, searchValue } =
    useLoaderData<{
      page: string | undefined;
      usedTheme: string;
      viewPokemonListData: PokemonData[];
      totalPokes: number;
      searchValue: string;
    }>();

  const pageTheme =
    usedTheme === 'light' ? themeSettings.light : themeSettings.dark;

  return (
    <MainSection>
      <SearchSection theme={pageTheme} />
      <ContentSection
        viewPokemonListData={viewPokemonListData}
        theme={pageTheme}
      />
      <div>
        <Pagination
          searchValue={searchValue}
          theme={pageTheme}
          pageNum={page ? Number(page) : 1}
          pokemonCount={totalPokes}
        />
      </div>
    </MainSection>
  );
};

export default ContentPage;
