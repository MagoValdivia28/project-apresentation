import React from "react";
import SideBar from "../sideBarItem/page"
import styles from '../sideBar/style.module.css'
import Image from 'next/image'
const SideBarPage = () => {
    return (
        <div className={styles.div}>
            <Image src={'/enigma.jpg'} width={200} height={130}/>
            
            <SideBar className={styles.textlink} rota={"/"} texto={'página inicial'} />

            

        </div>
    )
}

export default SideBarPage