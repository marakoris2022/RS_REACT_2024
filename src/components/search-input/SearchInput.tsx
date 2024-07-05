import './searchInput.css';
import { BaseSyntheticEvent, Component, ReactNode } from 'react';
import {
  bindSearchValueState,
  getSearchValue,
  setSearchValue,
  setSearchValueState,
  State,
} from '../../store/state';
import { searchButtonClick } from '../search-button/searchButtonClick';

type InputProps = {
  placeholder?: string;
};

export class SearchInput extends Component<InputProps, State> {
  constructor(props: InputProps) {
    super(props);

    this.state = { value: getSearchValue() };

    bindSearchValueState(this.setState.bind(this));
  }

  handleChange = (e: BaseSyntheticEvent) => {
    const cleanedValue: string = e.target.value.replace(/[^a-zA-Zа-яА-Я]/g, '');

    setSearchValue(cleanedValue.toLocaleLowerCase());
    setSearchValueState(getSearchValue());
  };

  render(): ReactNode {
    return (
      <input
        className="search__input"
        type="text"
        onChange={this.handleChange}
        onKeyDown={(e) => {
          if (e.code === 'NumpadEnter' || e.code === 'Enter') {
            searchButtonClick();
          }
        }}
        value={this.state.value}
        placeholder={this.props.placeholder}
      />
    );
  }
}
