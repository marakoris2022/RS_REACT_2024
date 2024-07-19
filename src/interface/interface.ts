export enum ButtonType {
  GREEN = 'greenButton',
  RED = 'redButton',
}

export enum DialogType {
  INFO = 'dialogInfo',
  ERROR = 'dialogError',
}

export type DialogState = {
  dialogState: boolean;
  dialogContent: JSX.Element;
  dialogType: DialogType;
};

export type PokemonData = {
  abilities: {
    ability: {
      name: string;
    };
  }[];
  base_experience: number;
  held_items: {
    item: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: {
    stat: {
      name: string;
    };
    base_stat: number;
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
};

export type PokemonListData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type PaginationProps = {
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pokemonList: PokemonData[];
};

export type CardComponent = {
  cardSelected: PokemonData;
};

export interface CardWrapper extends CardComponent {
  handleClick: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => void;
  children: JSX.Element;
}
