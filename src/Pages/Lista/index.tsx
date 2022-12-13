import Card from 'Components/Card';
import Search from 'Components/Search';
import { IAnimal } from 'Interfaces/animal';
import { useAnimalList } from 'store/hooks/useAnimalList';
import { useFilter } from 'store/hooks/useFiltro';
import { useSearch } from 'store/hooks/useSearch';
import { useUpdateFilter } from 'store/hooks/useUpdateFilter';
import styles from './Lista.module.scss';

export default function Lista() {

    const animals: IAnimal[] = useAnimalList();

    const search: string = useSearch();

    const filter: string = useFilter();

    var animalsSearch = animals.filter((animais) => animais.name?.toLowerCase().includes(search.toLowerCase()));

    animalsSearch = filter === "" ? animalsSearch : animalsSearch.filter((animais) => animais.category === filter);

    const setFilter = useUpdateFilter();

    const filterArray = [
        'Mamífero', "Réptil", 'Peixe', "Anfíbio", "Ave"
    ]

    const updateFilter = (filter: string) => {

        setFilter(filter);

    }

    return (
        <div>
            <Search />
            <div className={styles.container}>
                <main className={styles.container__main}>
                    <h3>Lista de Animais</h3>
                    {animalsSearch.map((animal) => (<Card key={animal.id} animal={animal} />))}
                </main>
                <aside className={styles.container__filter}>
                    <h3>Selecione uma categoria de animal</h3>
                    <ul>
                        <li className={`${filter === "" ? styles.container__filter__selected : ""}`} onClick={() => updateFilter("")}>Todos</li>
                        {filterArray.map((filterValue, index) => (<li className={`${filter === filterValue ? styles.container__filter__selected : ""}`} key={index} onClick={() => updateFilter(filterValue)}>{filterValue}</li>))}
                    </ul>
                </aside>
            </div>
        </div>
    )
}
