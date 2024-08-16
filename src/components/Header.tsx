import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <a href= "/" className={styles.header}>Go to homepage</a>
        </header>
    )
}