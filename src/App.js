import { useEffect, useState } from 'react';
import { getTopGames, searchCategories, getGames } from './api/twitch';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import useTwitchAuthentication from './hooks/useTwitchAuthentication';
import Cerca from "./components/Cerca";

function App() {

  const isAuthenticated = useTwitchAuthentication();
  const [data,setData] = useState([])
  const [cat,setCat] = useState([])

  const [valore2, setValore2] = useState("");
  const [cat2,setCat2] = useState([])
  const [show, setShow] = useState(false)
  const [browse, setBrowse] = useState(false);

  useEffect(() => {
    searchCategories({ query: `/${valore2}` })
    .then(response => setCat2(response.data))
    .then(console.log(cat2))
    .then(() => {
      valore2 != "" ? setShow(true) : setShow(false);
    })
  }, [valore2])


  if (!isAuthenticated) { 
    return null;
  }

  function getTop(dati){
    setData(dati)
  }

  function getCat(categoria){
    setCat(categoria)
  }

  function getFromCerca(v) {
    setValore2(v)
  }

  function browseCategories(b) {
    setBrowse(b);
  }
  

  return (
    <div className="App">
      <Navbar setTopGames={getTop} setCategories={getCat} sfoglia={browseCategories}/>
      {
        browse && <Cerca cerca={getFromCerca}/>
      }
      <Content passadati={data} passacategorie2={cat2} bool={show} />

    </div>
  );
}

export default App;