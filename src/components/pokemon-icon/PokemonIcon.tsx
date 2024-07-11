import style from './pokemonIcon.module.scss';
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
      <div
        style={{ width: this.props.width, height: this.props.width }}
        className={style.pokemonIconWrapper}
      >
        <img
          className={style.pokemonIcon}
          width={this.props.width}
          src={this.props.src}
          alt={this.props.alt}
        />
      </div>
    );
  }
}
