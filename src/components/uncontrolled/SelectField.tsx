import styles from './uncontrolled.module.css';

export const SelectField = ({
    label,
    id,
    value,
    onChange,
    options,
}: {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}) => (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>
            {label}
        </label>
        <select className={styles.select} id={id} value={value} onChange={onChange}>
            {options.map((option) => (
                <option className={styles.option} key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);
