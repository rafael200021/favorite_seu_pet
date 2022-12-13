import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss';
import Logo from 'assets/images/logo.svg';

export default function Header({ children }: { children: any }) {

    return (
        <>
            <nav className={styles.navBar}>
                <img src={Logo} alt="logo" />

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
