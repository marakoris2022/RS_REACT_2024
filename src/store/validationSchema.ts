import * as Yup from 'yup';

export const schema = Yup.object({
    image: Yup.mixed<File>()
        .required('Image is required')
        .test('fileSize', 'File size too large', (value) => {
            if (!value) return true;

            return value.size <= 2 * 1024 * 1024;
        })
        .test('fileType', 'Unsupported file format', (value) => {
            if (!value) return true;

            return ['image/png', 'image/jpeg'].includes(value.type);
        })
        .test('fileExists', 'Picture is required', (value) => {
            return value && value instanceof File && value.size > 0 && value.name !== '';
        }),
    country: Yup.string().required('Country is required'),
    terms: Yup.boolean().required('You must accept the terms and conditions').oneOf([true], 'You must accept the terms and conditions'),

    gender: Yup.boolean().required('Gender is required'),

    confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
            'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character'
        ),
    email: Yup.string().required('Email is required').email('Invalid email format'),

    age: Yup.number().required('Age is required').min(0, 'Age cannot be negative').integer('Age must be an integer'),

    name: Yup.string()
        .required('Name is required')
        .matches(/^[A-Z][a-z]*$/, 'Name must start with an uppercase letter'),
});
