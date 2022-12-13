import { NavigateFunction, useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import styles from './Home.module.scss';

export default function Home() {

    const navigate: NavigateFunction = useNavigate();

    const goToLista = () => {

        navigate('/lista/animais');

    };

    return (
        <div className={styles.home}>

            <div className={styles.home__text}>
                <h1>Encontre aqui o seu animal favorito</h1>
                <h2>É simples rápido e fácil, basta clicar no botão abaixo e selecionar os seus animais favoritos</h2>
            </div>

            <Button buttonFunction={goToLista}>Ir para Lista</Button>
        </div>
    )
}
