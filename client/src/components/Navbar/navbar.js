import { NavLink } from "react-router-dom"
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.links}>Login</div>
            <div className={styles.links}>Sign up</div>
            <div className={styles.linksLeft}>Tutor Finder</div>
        </div>
    )
}

export default Navbar