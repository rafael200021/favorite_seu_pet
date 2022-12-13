import React from 'react'
import styles from './Footer.module.scss';
import Logo from 'assets/images/logo.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import instagramIcon from 'assets/icons/instagram.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.line}`}>
                <img src={Logo} alt="logo" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit velit exercitationem rem molestias reiciendis ratione nisi. Odit fugiat in sapiente, sit expedita, repellendus quo unde et ab, earum quis.
                </p>
            </div>
            <div className={`${styles.line}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo unde delectus modi doloremque a praesentium vel sit corporis facere eius ipsam quisquam facilis laboriosam itaque, voluptate corrupti illum earum. Repellendus?</p>
            </div>
            <div>
                <h3>Social Network</h3>
                <div className={styles.footer__social}>
                    <a href="/"><img src={FacebookIcon} alt='facebook icon' /></a>
                    <a href="/"><img src={twitterIcon} alt='twitter icon' /></a>
                    <a href="/"><img src={instagramIcon} alt='instagram icon' /></a>
                </div>

            </div>
        </footer >
    )
}
