import styles from './dashinput.module.css';

const dashInput = ({nome, aoMudar, tipo, valor }) => {
    return(
        <div className={styles.description}>
        <input
          className={styles.inputdescription}
          value={valor}
          type={tipo}
          placeholder = {nome}
          onChange= {aoMudar}
        />
      </div>
    )
}

export default dashInput;