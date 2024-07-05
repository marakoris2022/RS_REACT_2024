import { getPokemonDataByName } from '../../api/restApi';
import {
  getSearchValue,
  setSearchValueToLocalStorage,
  setPokemonCardState,
  setSectionState,
} from '../../store/state';
import { useDialog } from '../dialog/Dialog';

export async function searchButtonClick() {
  const openDialog = useDialog();
  if (getSearchValue()) {
    try {
      await getPokemonDataByName(getSearchValue());
      setSearchValueToLocalStorage(getSearchValue());
      setPokemonCardState();
    } catch {
      setSearchValueToLocalStorage('');
      const pokeName = getSearchValue();
      openDialog(`Can't find this Pokemon: "${pokeName}"`);
      throw new Error(`Can't find this Pokemon: "${pokeName}"`);
    } finally {
      setSectionState();
    }
  }
}
