import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main';
import { FormUncontrolled } from './pages/FormUncontrolled';
import { FormControlled } from './pages/FormControlled';
import ErrorBoundary from './components/ErrorBoundary';
import { Header } from './components/header/Header';

function ErrorFallback(): JSX.Element {
    return <div>Something went wrong</div>;
}

function App() {
    return (
        <ErrorBoundary fallbackComponent={ErrorFallback}>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/form-uncontrolled" element={<FormUncontrolled />} />
                <Route path="/form-controlled" element={<FormControlled />} />
            </Routes>
        </ErrorBoundary>
    );
}

export default App;
