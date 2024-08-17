import React from 'react';
import styles from './uncontrolled.module.css';

export const CheckboxField = React.forwardRef<HTMLInputElement, { label: string; id: string; error: string }>(({ label, id, error }, ref) => (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>
            {label}
        </label>
        <input className={styles.input} type="checkbox" id={id} ref={ref} />
        <span className={styles.span}>{error}</span>
    </div>
));
