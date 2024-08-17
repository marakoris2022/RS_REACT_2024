import { useRef } from 'react';

export const FormUncontrolled = () => {
    const fromRef = useRef<HTMLFormElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const nameErrorRef = useRef<HTMLSpanElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const ageErrorRef = useRef<HTMLSpanElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const emailErrorRef = useRef<HTMLSpanElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordErrorRef = useRef<HTMLSpanElement>(null);
    const genderRef = useRef<HTMLInputElement>(null);
    const genderErrorRef = useRef<HTMLSpanElement>(null);
    const termsRef = useRef<HTMLInputElement>(null);
    const termsErrorRef = useRef<HTMLSpanElement>(null);
    const submitErrorRef = useRef<HTMLSpanElement>(null);

    const countries = ['Ukraine', 'USA', 'Germany', 'Spain', 'Italy'];

    const countryRef = useRef<string>(countries[0]);

    const handleSubmit = () => {
        console.log('Name:', nameRef.current?.value);
        console.log('age:', ageRef.current?.value);
        console.log('emailRef:', emailRef.current?.value);
        console.log('passwordRef:', passwordRef.current?.value);
        console.log('genderRef:', genderRef.current?.checked);
        console.log('termsRef:', termsRef.current?.checked);
        console.log('country:', countryRef.current);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        countryRef.current = e.target.value;
    };

    return (
        <main>
            <div className="container">
                <section>
                    <h1>Uncontrolled Form</h1>

                    <form ref={fromRef}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input autoComplete="given-name" type="text" id="name" ref={nameRef} />
                            <span ref={nameErrorRef}></span>
                        </div>
                        <div>
                            <label htmlFor="age">Age:</label>
                            <input type="number" min={1} defaultValue={1} id="age" ref={ageRef} />
                            <span ref={ageErrorRef}></span>
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" ref={emailRef} />
                            <span ref={emailErrorRef}></span>
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" ref={passwordRef} />
                            <span ref={passwordErrorRef}></span>
                        </div>
                        <div>
                            <label htmlFor="gender">Male / Female:</label>
                            <input type="checkbox" id="gender" ref={genderRef} />
                            <span ref={genderErrorRef}></span>
                        </div>
                        <div>
                            <label htmlFor="terms">Accept T&C:</label>
                            <input type="checkbox" id="terms" ref={termsRef} />
                            <span ref={termsErrorRef}></span>
                        </div>
                        <div>
                            <label htmlFor="country">Country:</label>
                            <select onChange={handleChange} id="country">
                                {countries.map((country) => {
                                    return (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    );
                                })}
                            </select>
                            <span ref={termsErrorRef}></span>
                        </div>
                        <button onClick={handleSubmit} type="button">
                            Submit
                        </button>
                        <button type="reset">Reset</button>
                        <span ref={submitErrorRef}></span>
                    </form>
                </section>
            </div>
        </main>
    );
};
