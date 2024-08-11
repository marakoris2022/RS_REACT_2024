import { createContext, useState, useContext, ReactNode } from 'react';
import { PokemonData } from '../interface/interface';
import React from 'react';

type GlobalStateProviderType = {
  searchValue: string;
  filterName: string;
  pageNumber: number;
  chosenPokes: PokemonData[];
  choosenCard: PokemonData | null;
};

type GlobalStateContextType = {
  state: GlobalStateProviderType;
  setState: React.Dispatch<React.SetStateAction<GlobalStateProviderType>>;
};

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

type GlobalStateProviderProps = {
  children: ReactNode;
};

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [state, setState] = useState<GlobalStateProviderType>({
    searchValue: '',
    filterName: '',
    pageNumber: 1,
    chosenPokes: [],
    choosenCard: null,
  });

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
