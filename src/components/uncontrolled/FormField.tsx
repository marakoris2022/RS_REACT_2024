import React from 'react';
import styles from './uncontrolled.module.css';

export const FormField = React.forwardRef<HTMLInputElement, { label: string; id: string; type?: string; error: string; defaultValue?: string }>(
    ({ label, id, type = 'text', error, defaultValue = '' }, ref) => (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input className={styles.input} type={type} id={id} ref={ref} defaultValue={defaultValue} />
            <span className={styles.span}>{error}</span>
        </div>
    )
);
