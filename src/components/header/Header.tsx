import { Link } from '../link/Link';
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link url="/" title="Main" />
                        </li>
                        <li>
                            <Link url="/form-controlled" title="React Hook Form" />
                        </li>
                        <li>
                            <Link url="/form-uncontrolled" title="Uncontrolled Component" />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
