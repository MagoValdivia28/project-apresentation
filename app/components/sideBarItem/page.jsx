import React from "react";
import Link from 'next/link';
import styles from './sidebar.module.css'

const sideBar = ({rota, texto}) => {
    return (
        <div className={styles.div1}> 
            <Link className={styles.textlink} href={rota}>{texto}</Link>
        </div>
    );
}

export default sideBar;