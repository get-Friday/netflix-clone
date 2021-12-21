import styles from '../styles/MainMovie.module.css'
import Button from './Button'

export default function MainMovie() {
    return (
        <div className={styles.main}>
            <div>
                <h3 className={styles.title}>ARCANE</h3>
                <p>Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.</p>
                <Button role='button' >ASSISTIR AGORA</Button>
                <Button role='button' >MAIS INFORMAÇÕES</Button>
            </div>
        </div>
    )
}