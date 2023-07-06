"use client";

import { useContext } from 'react';
import styles from '../../styles/home_styles/HomeSearch.module.css';
import MyContext from '@/app/contextApi/MyContext';

export default function HomeSearch() {
    const {
        search,
        buttonSearch
    } = useContext(MyContext)

    return (
        <div className={ styles.DivFatherHomeSearch }>
            <div className={ styles.DivSonHomeSearch }>
                <input onChange={ search } type="search" placeholder="Pesquisa aqui" />
                <button onClick={ buttonSearch } type="button">pesquisar</button>
            </div>
        </div>
    )
}