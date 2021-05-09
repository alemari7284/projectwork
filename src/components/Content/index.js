import React, { useState } from 'react';
import { useEffect } from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import { Grid } from "@material-ui/core";
import GameCard from "./GameCard";

// setTheArray(oldArray => [...oldArray, newElement]);

const Content = (props) => {

  const [gioco, setGioco] = useState("");

  function getInfo(event) {
    var game = event.target.getAttribute("el");
    setGioco(game);
  }

  useEffect(() => {
    selezione();
  }, [gioco])

  function selezione() {
    var h2 = document.createElement("h2");
    h2.innerHTML = gioco;
    if (gioco != "") {
      document.getElementById("sel").innerHTML = "";
      document.getElementById("sel").appendChild(h2);
    }
  }

      return (
        //TOP GAMES
        <Grid container spacing={2} direction="rows">
            {
              props.passadati.map((el, i)=>{
                return (
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <a key={i} href="#"> <img src={el.box_art_url}></img> </a>
                    {/* <GameCard 
                    key={i}
                    url={el.box_art_url}
                    /> */}
                  </Grid>
                ) 
              })
            }
        {/* SFOGLIA CATEGORIE */}
            {
              props.bool && props.passacategorie2.map((el, i) => {
                return ( 
                <Grid item xs={12} md={2} lg={2}>
                  <a onClick={getInfo} id={i} key={i} href="#"> <img src={el.box_art_url} el={el.name}></img> </a>
                </Grid>
                )
              }) 
            }
        <div id="sel">
        </div>
        </Grid>
        )
    }

    export default Content;