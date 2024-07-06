import './App.css';
import { ContentSection } from './components/content-section/ContentSection';
import { Dialog } from './components/dialog/Dialog';
import { ErrorBoundary } from './components/error-boundarie/ErrorBoundarie';
import { SearchSection } from './components/search-section/SearchSection';

function App() {
  return (
    <>
      <Dialog />
      <ErrorBoundary>
        <>
          <SearchSection />
          <ContentSection />
        </>
      </ErrorBoundary>
    </>
  );
}

export default App;
