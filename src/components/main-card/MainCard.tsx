import React, { useEffect } from 'react';
import { formDataProps } from '../../interface/interface';
import styles from './mainCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setChangedCard } from '../../store/store';

interface FormDataSectionProps {
    title: string;
    data: formDataProps;
}

export const MainCard: React.FC<FormDataSectionProps> = ({ title, data }) => {
    const dispatch = useDispatch();
    const cardChanged = useSelector((state: RootState) => state.coreSlice.changedCard);
    const isEffect = cardChanged === title;

    useEffect(() => {
        if (isEffect) {
            setTimeout(() => {
                dispatch(setChangedCard(null));
            }, 1000);
        }
    }, [dispatch, isEffect]);

    return (
        <div className={`${styles.cardWrapper} ${isEffect ? styles.effect : ''}`}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardItem}>
                <span className={styles.itemTitle}>Name:</span> {data.name}
            </p>
            <p className={styles.cardItem}>
                <span className={styles.itemTitle}>Age:</span> {data.age < 1 ? 'no data' : data.age}
            </p>
            <p className={styles.cardItem}>
                <span className={styles.itemTitle}>Email:</span> {data.email}
            </p>
            <p className={styles.cardItem}>
                <span className={styles.itemTitle}>Password:</span> {data.password}
            </p>
            <p className={styles.cardItem}>
                <span className={styles.itemTitle}>Confirm Password:</span> {data.confirmPassword}
            </p>
            <p className={styles.cardItem}>
                <span className={styles.itemTitle}>Gender:</span> {data.gender ? 'Girl' : 'Man'}
            </p>
            <p className={styles.cardItem}>
                <span className={styles.itemTitle}>Terms:</span> {data.terms ? 'Confirmed' : 'Refused'}
            </p>
            {typeof data.image === 'string' && data.image ? (
                <div className={styles.cardImage}>
                    <img width={200} src={data.image} alt="Uploaded" />
                </div>
            ) : (
                <p className={styles.cardItem}>No Image</p>
            )}
            <p className={styles.cardItem}>
                <span className={styles.itemTitle}>Country:</span> {data.country}
            </p>
        </div>
    );
};
