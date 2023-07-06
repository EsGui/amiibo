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
        requestAmiibo
    } = useContext(MyContext);

    return (
        <div className={ styles.DivFatherHomeBody }>
            <div className={ styles.DivSonHomeBody }>
                {
                    requestAmiibo ? requestAmiibo.map(({ image, character, gameSeries }, index) => (
                        (index > (offset == 0 ? 0 : offset) && index <= (offset == 0 ? LIMIT : (offset + LIMIT))) &&
                        <div>
                            <img src={ image } />
                            <p>Character: { character }</p>
                            <p>Game Serie: { gameSeries }</p>
                            <button type="button">Favoritar</button>
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
