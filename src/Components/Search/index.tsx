import Button from 'Components/Button'
import React, { useState } from 'react'
import { useUpdateSearch } from 'store/hooks/useUpdateSearch';
import styles from './Search.module.scss'
export default function Search() {

    const [search, setSearch] = useState('');
    const setRecoilSearch = useUpdateSearch();

    const novaBusca = () => {

        setRecoilSearch(search);
    }

    return (

        <div className={styles.search}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
            <Button buttonFunction={novaBusca}>Buscar</Button>
        </div>
    )
}
