let _searchStore = {
  value: '',
};

export function getSearchValue() {
  return _searchStore.value;
}

export function setSerchValue(text: string) {
  _searchStore.value = text;
}
