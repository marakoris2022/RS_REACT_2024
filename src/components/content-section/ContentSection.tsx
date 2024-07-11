import { Component, ReactNode } from 'react';
import './contentSection.css';
import {
  bindSectionState,
  getSearchValueFromLocalStorage,
  State,
} from '../../store/state';

type ContentSectionProps = Record<string, never>;

export class ContentSection extends Component<ContentSectionProps, State> {
  constructor(props: ContentSectionProps) {
    super(props);

    this.state = { value: getSearchValueFromLocalStorage() };

    bindSectionState(this.setState.bind(this));
  }

  render(): ReactNode {
    return (
      <section>
        <div className="container">
          {/* {this.state.value ? <PokemonCard /> : <PokemonList />} */}
        </div>
      </section>
    );
  }
}
