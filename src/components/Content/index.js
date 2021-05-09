import React, { useState } from 'react';
import { useEffect} from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
// setTheArray(oldArray => [...oldArray, newElement]);

const Content = (props) => {

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
            {/*
              props.passacategorie.map((el, i) =>{
                return <a key={i} href="#"> <img src={el.box_art_url}></img> </a>
              })*/
            }
            {
              props.bool ? props.passacategorie2.map((el, i) => {
                return <a key={i} href="#"> <img src={el.box_art_url}></img> </a>
              }) : null

            }
        </div>
      </div>
          )
    }

    export default Content;