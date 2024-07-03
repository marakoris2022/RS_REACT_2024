import { Component, ReactNode } from 'react';
import './contentSection.css';
import {
  bindSectionState,
  getSearchValueFromLocalStorage,
} from '../../store/state';
import { PokemonCard } from '../pokemon-card/PokemonCard';
import { PokemonList } from '../pokemon-list/PokemonList';

type ContentSectionProps = {};

type State = {
  value: string;
};

export class ContentSection extends Component<ContentSectionProps, State> {
  constructor(props: ContentSectionProps) {
    super(props);

    this.state = { value: getSearchValueFromLocalStorage() };

    bindSectionState(this.setState.bind(this));
  }

  render(): ReactNode {
    return (
      <section>{this.state.value ? <PokemonCard /> : <PokemonList />}</section>
    );
  }
}
