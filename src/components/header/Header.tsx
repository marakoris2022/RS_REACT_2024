import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Main</Link>
                    </li>
                    <li>
                        <Link to={'/form-controlled'}>React Hook Form</Link>
                    </li>
                    <li>
                        <Link to={'/form-uncontrolled'}>Uncontrolled Components</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
