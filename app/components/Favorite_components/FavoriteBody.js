'use client';

import { useContext, useEffect, useState } from 'react';
import styles from '../../styles/favorite_styles/FavoriteBody.module.css'
import MyContext from '@/app/contextApi/MyContext';

export default function FavoriteBody() {
    const {
        requestAmiibo,
    } = useContext(MyContext);
    const [storage, setStorage] = useState([]);
    
    useEffect(() => {
        const favoritado = JSON.parse(localStorage.getItem("save"));
        setStorage(favoritado)
    }, []);

    const desfavoritar = (tail) => {
        const storage = JSON.parse(localStorage.getItem("save"));
        const condition = storage.filter((element) => element != tail);
        setStorage(condition)
        localStorage.setItem("save", JSON.stringify(condition));
    }

    console.log(storage);

    return (
        <div className={ styles.DivFatherFavoriteBody }>
            {
                requestAmiibo.map(({ image, character, gameSeries, tail }, index) => {
                    if (storage.includes(tail)) {
                        return (
                            <div className={ styles.DivAmiiboFavoriteBody }>
                                <img src={ image } />
                                <div>
                                    <p>Character: { character }</p>
                                    <p>Game Serie: { gameSeries }</p>
                                    <button onClick={ () => desfavoritar(tail) } type="button">Desfavoritar</button>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}