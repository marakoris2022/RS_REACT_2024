import React from 'react';
import styles from './uncontrolled.module.css';
import { UseFormRegister } from 'react-hook-form';

type UseFormRegisterProps = {
    name: string;
    email: string;
    image: File;
    password: string;
    age: number;
    confirmPassword: string;
    gender: NonNullable<boolean | undefined>;
    terms: NonNullable<boolean | undefined>;
    country: string;
};

export const CheckboxField = React.forwardRef<
    HTMLInputElement,
    {
        label: string;
        id: 'name' | 'email' | 'image' | 'password' | 'age' | 'confirmPassword' | 'gender' | 'terms' | 'country';
        error: string;
        register?: UseFormRegister<UseFormRegisterProps>;
    }
>(({ label, id, error, register }, ref) => {
    const props = register ? { ...register(id) } : { ref };

    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input autoComplete="on" className={styles.input} type="checkbox" id={id} {...props} />
            <span className={styles.span}>{error}</span>
        </div>
    );
});
