import React from 'react'
import { useState, useEffect} from "react";
import Character from './Character';
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

function CharacterList() {

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
    <div>
      <PrevButton 
      prev={info.prev}
      onPrevious={onPrevious}/>
    <NextButton 
      onNext={onNext} 
      next={info.next}/>
        <ol>
        {characters.map((characters) => (
      <Character key={characters.id} characters={characters}/>
      ))}
        </ol>
    <PrevButton 
      prev={info.prev}
      onPrevious={onPrevious}/>
    <NextButton 
      onNext={onNext} 
      next={info.next}/>
    </div>
  )
}

export default CharacterList