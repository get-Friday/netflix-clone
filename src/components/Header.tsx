import styles from '../styles/Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className={styles.container}>
            <h2 className={styles.logo}>NETFLIX</h2>
            <nav>
                <a href="#">Início</a>
                <a href="#">Séries</a>
                <a href="#">Filmes</a>
                <a href="#">Documentários</a>
                <FontAwesomeIcon icon={faBars} className={styles.icon}/>
            </nav>
        </div>
    )
}