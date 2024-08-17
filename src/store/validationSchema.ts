import * as Yup from 'yup';

export const schema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .matches(/^[A-Z][a-z]*$/, 'Name must start with an uppercase letter'),
    age: Yup.number().required('Age is required').min(0, 'Age cannot be negative').integer('Age must be an integer'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
            'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character'
        ),
    confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    gender: Yup.boolean().required('Gender is required'),
    terms: Yup.boolean().required('You must accept the terms and conditions').oneOf([true], 'You must accept the terms and conditions'),
    image: Yup.mixed()
        .required('Picture is required')
        .test('fileSize', 'File too large, max size is 2MB', (value) => {
            if (!value) return false;
            return (value as File).size <= 2 * 1024 * 1024;
        })
        .test('fileType', 'Unsupported file format, only PNG and JPEG are allowed', (value) => {
            if (!value) return false;
            return ['image/png', 'image/jpeg'].includes((value as File).type);
        }),
    country: Yup.string().required('Country is required'),
});
