import React from 'react';
import { formDataProps } from '../../interface/interface';

interface FormDataSectionProps {
    title: string;
    data: formDataProps;
}

export const MainCard: React.FC<FormDataSectionProps> = ({ title, data }) => (
    <>
        <h2>{title}</h2>
        <br />
        <p>Name: {data.name}</p>
        <p>Age: {data.age < 1 ? 'no data' : data.age}</p>
        <p>Email: {data.email}</p>
        <p>Password: {data.password}</p>
        <p>Confirm Password: {data.confirmPassword}</p>
        <p>Gender: {data.gender ? 'Girl' : 'Man'}</p>
        <p>Terms: {data.terms ? 'Confirmed' : 'Refused'}</p>
        {typeof data.image === 'string' && data.image ? (
            <div>
                <img width={200} src={data.image} alt="Uploaded" />
            </div>
        ) : (
            <p>No Image</p>
        )}
        <p>Country: {data.country}</p>
        <br />
    </>
);
