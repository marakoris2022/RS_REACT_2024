import { Component } from 'react';

type PokemonListProps = {};

export class PokemonList extends Component<PokemonListProps> {
  constructor(props: PokemonListProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>Pokemon1</li>
          <li>Pokemon2</li>
          <li>Pokemon3</li>
          <li>Pokemon4</li>
        </ul>
      </div>
    );
  }
}
