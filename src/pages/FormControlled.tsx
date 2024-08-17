import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { RootState } from '../store/store';
import { schema } from '../store/validationSchema';

export const FormControlled = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state: RootState) => state.coreSlice.countries);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log('Form Data', data);
    };

    const handleimageUpload = () => {};

    return (
        <main>
            <div className="container">
                <section className={styles.wrapper}>
                    <h1 className={styles.title}>Controlled Form</h1>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input id="name" {...register('name')} />
                                {errors.name && <p>{errors.name.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="age">Age</label>
                                <input id="age" type="number" {...register('age')} />
                                {errors.age && <p>{errors.age.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" {...register('email')} />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" {...register('password')} />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input id="confirmPassword" type="password" {...register('confirmPassword')} />
                                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="gender">Gender</label>
                                <select id="gender" {...register('gender')}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender && <p>{errors.gender.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="terms">
                                    <input type="checkbox" id="terms" {...register('terms')} />
                                    Accept Terms and Conditions
                                </label>
                                {errors.terms && <p>{errors.terms.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="image">Upload Picture</label>
                                <input id="picture" type="file" {...register('image')} onChange={handleimageUpload} />
                                {errors.image && <p>{errors.image.message}</p>}
                            </div>

                            <div>
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
                                <button className={styles.button} type="reset">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};
