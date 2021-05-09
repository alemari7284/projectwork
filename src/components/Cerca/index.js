import React, { useEffect} from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import useProfile from '../../hooks/useProfile';
import {useState} from 'react'

const Cerca = (props) => {
    const [valore, setValore] = useState("");

    function passToApp() {
        props.cerca(valore);
    }

    useEffect(() => {
        passToApp();
    }, [valore])

    const look4 = () => {
        var ciao = document.getElementById("cercaCat").value;
        setValore(ciao);
    }

    return (
        <div>
            <input id="cercaCat" placeholder="Inserisci categoria"></input>
            <button onClick={look4}>CERCA</button>
        </div>
    )
}

export default Cerca;