
import styles from './dashcard.module.css';

const DashCard = ({titulo, valor, cor}) => {
    return(
        <div className={styles.cardSaldo} style={{ backgroundColor: cor}}>
            <p className={styles.cardTitle}>{titulo}</p>
            <p className={styles.cardValue}>R$ {valor}</p>
          </div>
    )
}

export default DashCard;







