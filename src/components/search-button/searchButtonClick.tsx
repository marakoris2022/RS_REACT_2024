import { getPokemonDataByName } from '../../api/restApi';
import {
  getSearchValue,
  setSearchValueToLocalStorage,
  setPokemonCardState,
  setSectionState,
} from '../../store/state';
import { closeDialog, DialogType, openDialog } from '../dialog/Dialog';
import { setErrorBoundaryState } from '../error-boundarie/ErrorBoundarie';

export async function searchButtonClick() {
  if (getSearchValue()) {
    try {
      openDialog('Loading...', DialogType.INFO);
      await getPokemonDataByName(getSearchValue());
      setSearchValueToLocalStorage(getSearchValue());
      setPokemonCardState();
    } catch {
      setErrorBoundaryState(true);
      setSearchValueToLocalStorage('');
      const pokeName = getSearchValue();
      throw new Error(`Can't find this Pokemon: "${pokeName}"`);
    } finally {
      closeDialog();
      setSectionState();
    }
  }
}
