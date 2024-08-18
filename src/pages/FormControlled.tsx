import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { RootState, setControlledFormData } from '../store/store';
import { schema } from '../store/validationSchema';
import { convertImageToBase64 } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import { formDataProps } from '../interface/interface';
import { FormField } from '../components/uncontrolled/FormField';
import { CheckboxField } from '../components/uncontrolled/CheckboxField';
import { FileInputField } from '../components/uncontrolled/FileInputField';

export const FormControlled = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const countries = useSelector((state: RootState) => state.coreSlice.countries);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: formDataProps) => {
        if (data.image && typeof data.image !== 'string') {
            const imgUrl = await convertImageToBase64(data.image);
            dispatch(setControlledFormData({ ...data, image: imgUrl }));
            navigate('/');
        }
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setValue('image', file, { shouldValidate: true });
        }
    };

    return (
        <main>
            <div className="container">
                <section className={styles.wrapper}>
                    <h1 className={styles.title}>Controlled Form</h1>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <FormField label="Name:" id="name" error={errors.name ? errors.name.message! : ''} register={register} />
                        <FormField label="Age:" id="age" defaultValue={1} error={errors.age ? errors.age.message! : ''} register={register} />
                        <FormField label="Email:" id="email" error={errors.email ? errors.email.message! : ''} register={register} />
                        <FormField
                            label="Password:"
                            id="password"
                            type="password"
                            error={errors.password ? errors.password.message! : ''}
                            register={register}
                        />
                        <FormField
                            label="Confirm Password:"
                            id="confirmPassword"
                            type="password"
                            register={register}
                            error={errors.confirmPassword ? errors.confirmPassword.message! : ''}
                        />

                        <CheckboxField label="Male / Female:" id="gender" error={errors.gender ? errors.gender.message! : ''} register={register} />

                        <CheckboxField label="Accept T&C:" id="terms" error={errors.terms ? errors.terms.message! : ''} register={register} />

                        <FileInputField
                            label="Add image:"
                            id="image"
                            onChange={handleImageUpload}
                            error={errors.image ? errors.image.message! : ''}
                        />

                        <div className={styles.selectWrapper}>
                            <label className={styles.label} htmlFor="country">
                                Country:
                            </label>
                            <select className={styles.select} id="country" {...register('country')}>
                                {countries.map((country) => (
                                    <option className={styles.option} key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.buttonWrapper}>
                            <button className={styles.button} type="submit">
                                Submit
                            </button>
                            <button className={styles.button} type="button" onClick={() => reset()}>
                                Reset
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};
