import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { AppDispatch, RootState, setUncontrolledFormData } from '../store/store';
import { schema } from '../store/validationSchema';
import { convertImageToBase64 } from '../utils/utils';
import React from 'react';
import { INITIAL_ERROR_STATE } from '../store/constants';
import { formDataProps } from '../interface/interface';
import { FormField } from '../components/uncontrolled/FormField';
import { CheckboxField } from '../components/uncontrolled/CheckboxField';
import { FileInputField } from '../components/uncontrolled/FileInputField';
import { SelectField } from '../components/uncontrolled/SelectField';
import styles from './form.module.css';

export const FormUncontrolled = () => {
    const dispatch: AppDispatch = useDispatch();
    const countries = useSelector((state: RootState) => state.coreSlice.countries);
    const navigate = useNavigate();

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLInputElement>(null);
    const termsRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<string>(countries[0]);
    const imageRef = useRef<File | null>(null);

    const [error, setError] = useState(INITIAL_ERROR_STATE);

    const validateAndSubmit = async (formData: formDataProps) => {
        try {
            const validData = await schema.validate(formData);

            if (formData.image && typeof formData.image !== 'string') {
                const imgUrl = await convertImageToBase64(formData.image);
                dispatch(setUncontrolledFormData({ ...validData, image: imgUrl }));
                navigate('/');
            }
        } catch (e) {
            if (e instanceof Yup.ValidationError) {
                setError(() => ({
                    ...INITIAL_ERROR_STATE,
                    [e.path!]: e.message,
                }));
            } else {
                console.error('Unexpected error', e);
            }
        }
    };

    const handleSubmit = () => {
        const formData = {
            name: nameRef.current?.value,
            age: Number(ageRef.current?.value),
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            confirmPassword: confirmPasswordRef.current?.value,
            gender: genderRef.current?.checked,
            terms: termsRef.current?.checked,
            image: imageRef.current,
            country: countryRef.current,
        };

        validateAndSubmit(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        countryRef.current = e.target.value;
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        imageRef.current = e.target.files ? e.target.files[0] : null;
    };

    return (
        <main>
            <div className="container">
                <section className={styles.wrapper}>
                    <h1 className={styles.title}>Uncontrolled Form</h1>
                    <form className={styles.form}>
                        <FormField label="Name:" id="name" ref={nameRef} error={error.name} />
                        <FormField label="Age:" id="age" type="number" ref={ageRef} error={error.age} defaultValue="1" />
                        <FormField label="Email:" id="email" ref={emailRef} error={error.email} />
                        <FormField label="Password:" id="password" type="password" ref={passwordRef} error={error.password} />
                        <FormField
                            label="Confirm Password:"
                            id="confirmPassword"
                            type="password"
                            ref={confirmPasswordRef}
                            error={error.confirmPassword}
                        />
                        <CheckboxField label="Male / Female:" id="gender" ref={genderRef} error={error.gender} />
                        <CheckboxField label="Accept T&C:" id="terms" ref={termsRef} error={error.terms} />
                        <FileInputField label="Add image:" id="image" onChange={handleImageChange} error={error.image} />
                        <SelectField label="Country:" id="country" value={countryRef.current} onChange={handleChange} options={countries} />

                        <div className={styles.buttonWrapper}>
                            <button className={styles.button} onClick={handleSubmit} type="button">
                                Submit
                            </button>
                            <button className={styles.button} type="reset">
                                Reset
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};
