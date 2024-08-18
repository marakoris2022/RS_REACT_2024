import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { MainCard } from '../components/main-card/MainCard';

export const Main = () => {
    const uncontrolledData = useSelector((state: RootState) => state.uncontrolledSlice.formData);
    const controlledData = useSelector((state: RootState) => state.controlledSlice.formData);

    return (
        <div className="container">
            <h1>Form Data</h1>
            <MainCard title="Uncontrolled Form" data={uncontrolledData} />
            <MainCard title="Controlled Form" data={controlledData} />
        </div>
    );
};
