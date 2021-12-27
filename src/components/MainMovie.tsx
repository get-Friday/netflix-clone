import styles from '../styles/MainMovie.module.css'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function MainMovie() {
    return (
        <div className={styles.main}>
            <div>
                <h3 className={styles.title}>ARCANE</h3>
                <p className={styles.description}>Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.</p>
                <div className={styles.container}>
                    <Button role='button' className='watch' ><FontAwesomeIcon icon={faPlay} className={styles.icon}/>Assistir</Button>
                    <Button role='button' className='info' ><FontAwesomeIcon icon={faInfoCircle} className={styles.icon}/>Mais informações</Button>
                </div>
            </div>
        </div>
    )
}