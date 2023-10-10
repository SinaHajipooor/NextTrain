import Link from "next/link"
import styles from './button.module.css'

function Button({ children, link }) {
    return (
        <Link legacyBehavior href={link}>
            <a className={styles.btn}>{children}</a>
            {/* {children} */}
        </Link>
    )
}

export default Button
