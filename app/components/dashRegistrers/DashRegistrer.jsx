import styles from './DasgRegistrers.module.css';
import { FaPen, FaTrash } from 'react-icons/fa'


const DashRegistrer = ({cor, desc, valor, btnR, btnE}) => {
    return(
        <div key={transacao.id} className={styles.registrosreceitasitem} style={{ backgroundColor: cor}}>
        <p>{desc}</p>
        <p className={styles.registrosreceitasitemvalue}>R$ {valor}</p>

        <div className={styles.actions}>
          <button
            className={styles.actionsbutton}
            onClick={() =>{btnE}}
          >
            <FaTrash />
          </button>

          <button
            className={styles.actionsbutton}
            onClick={() =>{btnR}}
          >
            <FaPen />
          </button>
        </div>
      </div>
    )
}

export default DashRegistrer;