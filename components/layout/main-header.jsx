import Link from "next/link"
import styles from './main-header.module.css'


function MainHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>Netflix</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>Home</li>
                    <li>My List</li>
                    <li>Signout</li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
