import React, { useState } from 'react';
import { useEffect } from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';

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
      <div>
        <div>
            {
              props.passadati.map((el, i)=>{
                return  <a key={i} href="#"> <img src={el.box_art_url}></img> </a>
              })
            }
        </div>
        <div>
            {
              props.bool && props.passacategorie2.map((el, i) => {
                return <a onClick={getInfo} id={i} key={i} href="#"> <img src={el.box_art_url} el={el.name}></img> </a>
              }) 
            }
        </div>
        <div id="sel">

        </div>
      </div>
          )
    }

    export default Content;