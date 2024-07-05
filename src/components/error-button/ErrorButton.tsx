import {
  getSearchValue,
  setSearchValue,
  setSearchValueState,
} from '../../store/state';
import { searchButtonClick } from '../search-button/searchButtonClick';
import './errorButton.css';
import { Component } from 'react';

type ErrorButtonProps = {
  title: string;
};

function errorButtonClick() {
  setSearchValue('error');
  setSearchValueState(getSearchValue());
  searchButtonClick();
}

export class ErrorButton extends Component<ErrorButtonProps> {
  constructor(props: ErrorButtonProps) {
    super(props);
  }

  render() {
    return (
      <button onClick={errorButtonClick} className="error__button">
        {this.props.title}
      </button>
    );
  }
}
