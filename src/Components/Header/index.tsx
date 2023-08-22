import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss';

export default function Header({ children }: { children: any }) {

    return (
        <>
            <nav className={styles.navBar}>
                <h1>Favorite seu Pet</h1>

                <ul>
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                    <li><Link to='/lista/animais'>Lista de Animais</Link></li>
                    <li><Link to='/favoritos'>Favoritos</Link></li>
                </ul>
            </nav>
            <div style={{ minHeight: '750px' }}>
                {children}
            </div>
        </>
    )
}
