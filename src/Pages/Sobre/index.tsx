import React from 'react'
import styles from './Sobre.module.scss';
import passaroImagem from 'assets/images/passaro.jpg';
export default function Sobre() {
    return (
        <div className={styles.container}>
            <img src={passaroImagem} alt="Pássaro" />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero molestiae nobis quasi maiores optio vero consectetur beatae corrupti amet officiis dolores dicta doloribus, doloremque, suscipit, ipsa porro debitis quo!</p>
            </div>
        </div>
    )
}
