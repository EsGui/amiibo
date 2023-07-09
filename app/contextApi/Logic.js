"use client";

import { useEffect, useState } from "react"
import MyContext from "./MyContext"
import axios from "axios";

export default function Logic({ children }) {
    const [requestAmiibo, setRequestAmiibo] = useState([]);
    const [textSearch, setTextSearch] = useState("");
    const [offset, setOffset] = useState(0);

    const search = ({ target: { value } }) => {
        setTextSearch(value);
    }

    const buttonSearch = async () => {
        const requestSearch = await axios.get("https://www.amiiboapi.com/api/amiibo/");
        const amiibo = requestSearch.data.amiibo.filter(({ character, gameSeries }) => character === textSearch || gameSeries === textSearch);
        setRequestAmiibo(amiibo)
    }

    useEffect(() => {
        const request = async () => {
            const requestApi = await axios.get("https://www.amiiboapi.com/api/amiibo/");
            setRequestAmiibo(requestApi.data.amiibo)
        }
        request();
    }, []);

    const objValue = {
        search,
        setOffset, 
        offset,
        requestAmiibo,
        buttonSearch,
    }

    return (
        <MyContext.Provider value={ objValue }>
            { children }
        </MyContext.Provider>
    )
}