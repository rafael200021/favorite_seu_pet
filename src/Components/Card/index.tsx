import { IAnimal } from 'Interfaces/animal'
import React from 'react'
import heart from 'assets/icons/heart.svg';
import heartFill from 'assets/icons/heart-fill.svg';
import styles from './Card.module.scss';
import useUpdateAnimalList from 'store/hooks/useUpdateAnimalList';
export default function Card({ animal }: { animal: IAnimal }) {

    const updateAnimalList = useUpdateAnimalList();

    const setFavorite = () => {

        const newAnimal = {
            ...animal,
            isFavorite: !animal.isFavorite,
        }

        updateAnimalList(newAnimal!);

    }

    return (
        <div className={styles.card}>
            <img src={animal.urlImage} alt={animal.name} />
            <div className={styles.card__content}>
                <div className={styles.card__title}>
                    <h3>{animal.name}</h3>
                </div>
                <p>{animal.description}</p>
                <div className={styles.card__favorite}>
                    {animal.isFavorite === true ? <img onClick={setFavorite} className={styles.card__icon} src={heartFill} alt="heart fill" /> : <img onClick={setFavorite} className={styles.card__icon} src={heart} alt="heart" />}
                </div>
            </div>
        </div>
    )
}
