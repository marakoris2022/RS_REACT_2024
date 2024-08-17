import styles from './uncontrolled.module.css';

export const FileInputField = ({
    label,
    id,
    onChange,
    error,
}: {
    label: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
}) => (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>
            {label}
        </label>
        <input className={styles.input} type="file" id={id} onChange={onChange} />
        <span className={styles.span}>{error}</span>
    </div>
);
