import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TestPokemon } from './__mock__';
import { SectionCard } from '../components/content-section/section-card/SectionCard';
import { ContentSection } from '../components/content-section/ContentSection';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('render test', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ContentSection />
        <SectionCard pokemon={TestPokemon} />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/squirtle/i);
  expect(linkElement).toBeInTheDocument();
});
