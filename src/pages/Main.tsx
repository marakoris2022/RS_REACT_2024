import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Main = () => {
    const uncontrolledData = useSelector((state: RootState) => state.uncontrolledSlice.formData);
    const controlledData = useSelector((state: RootState) => state.controlledSlice.formData);

    return (
        <div className="container">
            <h1>Form Data</h1>
            <br />
            <br />
            <h2>Uncontrolled From</h2>
            <br />
            <p>Name: {uncontrolledData.name}</p>
            <p>Age: {uncontrolledData.age}</p>
            <p>Email: {uncontrolledData.email}</p>
            <p>Password: {uncontrolledData.password}</p>
            <p>Gender: {uncontrolledData.gender ? 'Girl' : 'Man'}</p>
            <p>Terms: {uncontrolledData.terms ? 'Confirmed' : 'Refused'}</p>
            <p>Country: {uncontrolledData.country}</p>
            <br />
            <br />
            <h2>Controlled From</h2>
            <br />
            <p>Name: {controlledData.name}</p>
            <p>Age: {controlledData.age}</p>
            <p>Email: {controlledData.email}</p>
            <p>Password: {controlledData.password}</p>
            <p>Gender: {controlledData.gender ? 'Girl' : 'Man'}</p>
            <p>Terms: {controlledData.terms ? 'Confirmed' : 'Refused'}</p>
            <p>Country: {controlledData.country}</p>
        </div>
    );
};
