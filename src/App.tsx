import './App.css';
import { ContentSection } from './components/content-section/ContentSection';
import { Dialog } from './components/dialog/Dialog';
import { SearchSection } from './components/search-section/SearchSection';

function App() {
  return (
    <>
      <Dialog />
      <SearchSection />
      <ContentSection />
    </>
  );
}

export default App;
