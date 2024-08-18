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

export const FormField = React.forwardRef<
    HTMLInputElement,
    {
        label: string;
        id: 'name' | 'email' | 'image' | 'password' | 'age' | 'confirmPassword' | 'gender' | 'terms' | 'country';
        type?: string;
        error: string;
        defaultValue?: string | number;
        register?: UseFormRegister<UseFormRegisterProps>;
    }
>(({ label, id, type = 'text', error, defaultValue = '', register }, ref) => {
    const props = register ? { ...register(id) } : { ref };

    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input className={styles.input} {...props} type={type} id={id} defaultValue={defaultValue} />
            <span className={styles.span}>{error}</span>
        </div>
    );
});
