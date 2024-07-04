import { Component } from 'react';

type PokemonIconProps = {
  width: number;
  src: string;
  alt: string;
};

export class PokemonIcon extends Component<PokemonIconProps> {
  constructor(props: PokemonIconProps) {
    super(props);
  }

  render() {
    return (
      <img width={this.props.width} src={this.props.src} alt={this.props.alt} />
    );
  }
}
