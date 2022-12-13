import Button from "Components/Button";
import Card from "Components/Card";
import { useNavigate } from "react-router-dom";
import { useAnimalList } from "store/hooks/useAnimalList"
import styles from './Favoritos.module.scss'

export default function Favoritos() {

    let animals = useAnimalList();

    animals = animals.filter((animal) => animal.isFavorite);

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1>Lista dos seus Animais Favoritos</h1>
            {animals.length === 0 ? 
            <div className={styles.container__anyItens}>
                <h3>Você ainda não possuí nenhum animal favorito</h3>
                <Button buttonFunction={() => { navigate('/lista/animais') }}>Clique aqui e descubra o seu animal favorito</Button>
            </div> :
            animals.map((animal) => (<Card key={animal.id} animal={animal} />))}
        </div>
    )
}
