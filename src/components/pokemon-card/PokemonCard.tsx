import { Component } from 'react';

type PokemonCardProps = {};

export class PokemonCard extends Component<PokemonCardProps> {
  constructor(props: PokemonCardProps) {
    super(props);
  }

  render() {
    return <div>This is Pokemon Card</div>;
  }
}
