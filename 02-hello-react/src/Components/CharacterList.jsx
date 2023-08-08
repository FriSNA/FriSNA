import React from 'react'
import { useState, useEffect} from "react";
import Character from './Character';
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

function CharacterList() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
    const [characters, setCharacter] = useState([]);
    const [info, setInfo] = useState({count : 0, pages: 0, next: '', prev : ''});
    const [fetchUrl, setFetchUrl] = useState('https://rickandmortyapi.com/api/character')

    useEffect(()=> {
      const getCharacters = async () => {
    try{
      const response = await fetch(fetchUrl)
      const json = await response.json()
      setInfo(json.info)
      setCharacter(json.results)
    }
    catch (e){
      console.log('error', e)
    }
    }
      getCharacters();}, [fetchUrl])
    

      //Esto es la lógica de mis botones. 
    const onNext = () => {
      setFetchUrl(info.next)
      }
    
    const onPrevious = () => {
      setFetchUrl(info.prev);
      }
// ----------------------------------------------
  return (

    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
  
    <div align="center" >
      <PrevButton 
      prev={info.prev}
      onPrevious={onPrevious}/>
    
    <NextButton 
      onNext={onNext} 
      next={info.next}/>



      <Grid container spacing={2}>
        {characters.map((characters) => (
          <Grid item key={characters.id} xs={12} sm={6} md={3}>
      <Character characters={characters}/>
      {/* <Character key={characters.id} characters={characters}/> */}
          </Grid>
      ))}
        
        </Grid>



    <PrevButton 
      prev={info.prev}
      onPrevious={onPrevious}/>
    <NextButton 
      onNext={onNext} 
      next={info.next}/>
      </div>
    </ThemeProvider>
  )
}

export default CharacterList