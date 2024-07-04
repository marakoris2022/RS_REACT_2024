import './searchInput.css';
import { BaseSyntheticEvent, Component, ReactNode } from 'react';
import {
  bindSearchValueState,
  getSearchValue,
  setSearchValue,
  setSearchValueState,
  State,
} from '../../store/state';

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
    setSearchValue(e.target.value);
    setSearchValueState(getSearchValue());
  };

  render(): ReactNode {
    return (
      <input
        className="search__input"
        type="text"
        onChange={this.handleChange}
        value={this.state.value}
        placeholder={this.props.placeholder}
      />
    );
  }
}
