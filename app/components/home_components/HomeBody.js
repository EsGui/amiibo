"use client";

import axios from 'axios';
import styles from '../../styles/home_styles/HomeBody.module.css';
import React, { useEffect, useState } from 'react';
import HomePagination from './HomePagination';

const LIMIT = 12;

export default function HomeBody() {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState(0);

    console.log(offset)

    useEffect(() => {
        const request = async () => {
            const apiAmiibo = await axios.get("https://www.amiiboapi.com/api/amiibo");
            console.log("offset" + (offset == 0 ? 0 : (offset - LIMIT)))
            console.log("LIMIT" + (offset == 0 ? LIMIT : (offset + LIMIT)))
            setData(apiAmiibo.data.amiibo);
        }
        request();
    }, [offset]);

    console.log(data.length)

    return (
        <div className={ styles.DivFatherHomeBody }>
            <div className={ styles.DivSonHomeBody }>
                {
                    data ? data.map(({ image, character, gameSeries }, index) => (
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
                total={data.length}
                offset={offset}
                setOffset={setOffset}
            />
        </div>
    )
}
