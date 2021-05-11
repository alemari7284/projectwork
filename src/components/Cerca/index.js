import React, { useEffect} from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import useProfile from '../../hooks/useProfile';
import {useState} from 'react'
import $ from 'jquery';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';


const Cerca = (props) => {
    
    const useStyles = makeStyles((theme) => ({
        buttonStyle: {
            color: "white",
            border: "solid"
        },
        select: {
            // backgroundColor: "white",
            // textDecorationColor: "black"
        }, 
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          }
    }))
    const classes = useStyles();

    const [valore, setValore] = useState("");

    function passToApp() {
        props.cerca(valore);
    } 

    useEffect(() => {
        passToApp();
    }, [valore])

    const look4 = (event) => {
        var ciao = $("#cercaCat option:selected").val()
        // console.log(document.getElementById("cercaCat").value);
        // console.log($("#cercaCat option:selected").val());
        setValore(event.target.value);
    }

    return (
        <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">CATEGORIA</InputLabel>
            <Select className={classes.select}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={look4}
                value={valore} name="" id="cercaCat">
                <MenuItem value="">--SCEGLI--</MenuItem>
                <MenuItem value="Visual Novel">Visual Novel</MenuItem>
                <MenuItem value="RTS">RTS</MenuItem>
                <MenuItem value="Metroidvania">Metroidvania</MenuItem>
                <MenuItem value="Mondo aperto">Mondo aperto</MenuItem>
                <MenuItem value="IRL">IRL</MenuItem>
                <MenuItem value="Roguelike">Roguelike</MenuItem>
                <MenuItem value="Sport">Sport</MenuItem>
                <MenuItem value="Giochi di guida/corse">Giochi di guida/corse</MenuItem>
                <MenuItem value="Giochi di carte e da tavolo">Giochi di carte e da tavolo</MenuItem>
                <MenuItem value="Flipper">Flipper</MenuItem>
                <MenuItem value="Piattaforma">Piattaforma</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Stealth">Stealth</MenuItem>
                <MenuItem value="Gioco da casinò">Gioco da casinò</MenuItem>
                <MenuItem value="Giochi educativi">Giochi educativi</MenuItem>
                <MenuItem value="Oggetti nascosti">Oggetti nascosti</MenuItem>
                <MenuItem value="Giochi musicali">Giochi musicali</MenuItem>
                <MenuItem value="4X">4X</MenuItem>
                <MenuItem value="Sparatutto">Sparatutto</MenuItem>
                <MenuItem value="Rompicapo">Rompicapo</MenuItem>
                <MenuItem value="Arcade">Arcade</MenuItem>
                <MenuItem value="Gioco di avventura">Gioco di avventura</MenuItem>
                <MenuItem value="Mistero">Mistero</MenuItem>
                <MenuItem value="Strategia">Strategia</MenuItem>
                <MenuItem value="Autobattler">Autobattler</MenuItem>
                <MenuItem value="Gioco su dispositivi mobili">Gioco su dispositivi mobili</MenuItem>
                <MenuItem value="Gioco indie">Gioco indie</MenuItem>
                <MenuItem value="MMO">MMO</MenuItem>
                <MenuItem value="MOBA">MOBA</MenuItem>
                <MenuItem value="Shoot 'Em Up">Shoot 'Em Up</MenuItem>
                <MenuItem value="Survival">Survival</MenuItem>
                <MenuItem value="Simulazione">Simulazione</MenuItem>
                <MenuItem value="Simulatori di volo">Simulatori di volo</MenuItem>
                <MenuItem value="FPS">FPS</MenuItem>
                <MenuItem value="Azione">Azione</MenuItem>
                <MenuItem value="Picchiaduro">Picchiaduro</MenuItem>
                <MenuItem value="Overlay di gioco">Overlay di gioco</MenuItem>
                <MenuItem value="Creative">Creative</MenuItem>
                <MenuItem value="Punta e clicca">Punta e clicca</MenuItem>
                <MenuItem value="Fazione: Syndicate">Fazione: Syndicate</MenuItem>
                <MenuItem value="Livello: 60">Livello: 60</MenuItem>
            </Select>
            <FormHelperText>Seleziona la categoria</FormHelperText>
      </FormControl>
        </div>
    )
}

export default Cerca;