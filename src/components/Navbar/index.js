import React, { useEffect} from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import useProfile from '../../hooks/useProfile';
import classes from './navbar.module.css';
import {useState} from 'react'

const Navbar = (props) => {
  const { loading, error, user } = useProfile();
  const [data, setData] = useState([]);
  const [cat,setCat] = useState([])
  const [browseCat, setBrowse] = useState(false);

  //didMount
  useEffect(() => {
    getTopGames({after: '',before: '',first: 10,width: '188',height: '250',})
    .then(response => setData(response.data))
    .then(console.log(cat))
  }, [])

  
  function transferData(){ //trasferisce i dati ad App
    props.setTopGames(data)
  }

  // useEffect(() => {
  //   searchCategories({ query: '/' })
  //   .then(response => setCat(response.data))
  // }, []);

  
  // function transferCategories(){
  //   // props.setCategories(cat)
  // }

  function browseCategories() {
    props.sfoglia(true);
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__item}>
        {/* <a onClick={transferCategories} href="#">Sfoglia Categorie</a> */}
        <a onClick={browseCategories} href="#">Sfoglia Categorie</a>
        <a onClick={transferData} href="#">Top Games</a>
      </div>

      <div className={classes.navbar__item}>
        {!loading ? (
          <img
            src={user.profile_image_url}
            className={classes.avatar}
            alt="Profile"
            width={60}
          />
        ) : (
          <div className={classes.avatar} style={{ width: 60, height: 60 }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;