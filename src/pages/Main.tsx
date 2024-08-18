import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { MainCard } from '../components/main-card/MainCard';
import styles from './main.module.css';

export const Main = () => {
    const uncontrolledData = useSelector((state: RootState) => state.uncontrolledSlice.formData);
    const controlledData = useSelector((state: RootState) => state.controlledSlice.formData);

    return (
        <div className="container">
            <h1 className={styles.title}>Form Data</h1>
            <div className={styles.cardsWrapper}>
                <MainCard title="Uncontrolled Form" data={uncontrolledData} />
                <MainCard title="Controlled Form" data={controlledData} />
            </div>
        </div>
    );
};
