"use client";

import axios from 'axios';
import styles from '../../styles/home_styles/HomeBody.module.css';
import React, { useContext, useEffect, useState } from 'react';
import HomePagination from './HomePagination';
import MyContext from '@/app/contextApi/MyContext';

const LIMIT = 12;

export default function HomeBody() {
    const {
        setOffset,
        offset,
        requestAmiibo,
        buttonFavDes,
    } = useContext(MyContext);
    const [storage, setStorage] = useState([]);
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("save")) {
            localStorage.setItem("save", JSON.stringify([]));
        }
    }, []);

    const favoritar = (idAmiibo) => {
        const origin = JSON.parse(localStorage.getItem("save"));
        const condition = origin.some((element) => element === idAmiibo);
        setFavorite(condition)
        if (!condition) {
            localStorage.setItem("save", JSON.stringify([...origin, idAmiibo]));
        }
    }

    const desfavoritar = (tail) => {
        const storage = JSON.parse(localStorage.getItem("save"));
        const condition = storage.filter((element) => element != tail);
        setStorage(condition);
        localStorage.setItem("save", JSON.stringify(condition));
    }

    const storageFavorite = JSON.parse(window.localStorage.getItem("save"));

    return (
        <div className={ styles.DivFatherHomeBody }>
            <div className={ styles.DivSonHomeBody }>
                {
                    requestAmiibo ? requestAmiibo.map(({ id, image, character, gameSeries, tail }, index) => (
                        (index > (offset == 0 ? 0 : offset) && index <= (offset == 0 ? LIMIT : (offset + LIMIT))) &&
                        <div>
                            <img src={ image } />
                            <p>Character: { character }</p>
                            <p>Game Serie: { gameSeries }</p>
                            {
                                !storageFavorite.includes(tail) ?
                                    <button onClick={ () => favoritar(tail) } type="button">Favoritar</button>
                                :
                                    <button onClick={ () => desfavoritar(tail) } type="button">Desfavoritar</button>
                            }
                            
                        </div>
                    ))
                    :
                    <h1>Loading...</h1>
                }
            </div>
            <HomePagination
                limit={LIMIT}
                total={requestAmiibo.length}
                offset={offset}
                setOffset={setOffset}
            />
        </div>
    )
}
