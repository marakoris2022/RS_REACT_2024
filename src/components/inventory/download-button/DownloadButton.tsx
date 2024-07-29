import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Button } from '../../button/Button';
import { ButtonType } from '../../../interface/interface';
import { saveAs } from 'file-saver';

export const DownloadButton = () => {
  const chosenPokes = useSelector(
    (state: RootState) => state.pokeList.chosenPokes
  );

  const handleDownload = () => {
    const headers = [
      'Name',
      'Description',
      'Weight',
      'hp',
      'attack',
      'defense',
      'special-attack',
      'special-defense',
      'speed',
    ];
    const rows = Array.from(chosenPokes).map((pokemon) => [
      pokemon.name,
      pokemon.base_experience,
      pokemon.height,
      pokemon.stats.map((stat) => stat.base_stat).toString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const numberOfItems = chosenPokes.length;
    saveAs(blob, `${numberOfItems}_pokemons.csv`);
  };

  return (
    <Button
      onClick={handleDownload}
      title="Download"
      btnType={ButtonType.GREEN}
    />
  );
};
