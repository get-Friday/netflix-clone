import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <h2 className={styles.logo}>NETFLIX</h2>
            <nav>
                <a href="#">Início</a>
                <a href="#">Séries</a>
                <a href="#">Filmes</a>
                <a href="#">Documentários</a>
            </nav>
        </div>
    )
}