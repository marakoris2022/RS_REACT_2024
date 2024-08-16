import { NavLink } from 'react-router-dom';
import styles from './link.module.css';

type LinkProps = {
    url: string;
    title: string;
};

export const Link = ({ url, title }: LinkProps) => {
    return (
        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to={url}>
            {title}
        </NavLink>
    );
};
