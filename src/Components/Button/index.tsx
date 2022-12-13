import React from 'react'
import styles from './Button.module.scss';

export default function Button({ children, buttonFunction }: { children: any, buttonFunction: () => void }) {
    return (
        <button onClick={buttonFunction} className={styles.button}>
            {children}
        </button>
    )
}
