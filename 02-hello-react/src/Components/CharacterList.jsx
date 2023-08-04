import React from 'react'
import { useState, useEffect} from "react";
import Character from './Character';
import NextButton from "./Components/NextButton";
import PrevButton from "./Components/PrevButton";

function CharacterList() {

    const [characters, setCharacter] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(()=> {
      const getCharacters = async () => {
    try{
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const json = await response.json()
      setCharacter(json.results)
      setInfo(json.info)
    }
    catch (e){
      console.log('error', e)
    }
    }
      getCharacters();}, [])
    

      
    const onNext = () => {
      getCharacters(info.next);
      }
    
    const onPrevious = () => {
      getCharacters(info.prev);
      }

  return (
    <div>
        <ol>
        {characters.map((characters) => (
      <Character key={characters.id} characters={characters}/>
      ))}
        </ol>
    <NextButton next={info.next} onNext={onNext}/>
    <PrevButton prev={info.prev} onPrevious={onPrevious}/>
    </div>
  )
}

export default CharacterList