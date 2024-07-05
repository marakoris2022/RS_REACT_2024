import { getPokemonDataByName } from '../../api/restApi';
import {
  getSearchValue,
  setSearchValueToLocalStorage,
  setPokemonCardState,
  setSectionState,
} from '../../store/state';
import { closeDialog, DialogType, openDialog } from '../dialog/Dialog';

export async function searchButtonClick() {
  if (getSearchValue()) {
    try {
      openDialog('Loading...', DialogType.INFO);
      await getPokemonDataByName(getSearchValue());
      closeDialog();
      setSearchValueToLocalStorage(getSearchValue());
      setPokemonCardState();
    } catch {
      setSearchValueToLocalStorage('');
      const pokeName = getSearchValue();
      openDialog(`Can't find this Pokemon: "${pokeName}"`, DialogType.ERROR);
      throw new Error(`Can't find this Pokemon: "${pokeName}"`);
    } finally {
      setSectionState();
    }
  }
}
