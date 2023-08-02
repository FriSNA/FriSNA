import { useState, useEffect} from "react";


export function App() {
  const [character, setCharacter] = useState([]);

  // https://rickandmortyapi.com/api/character

  

  useEffect(()=> {
    const getCharacters = async () => {
  try{
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const json = await response.json()
    setCharacter(json.results)
    console.log(character)
    // console.log(json.results)
  }
  
  catch (e){
    console.log('error', e)
  }
  }
   
  getCharacters();}, [])

  

  return (
   <ol>
    {character.map(({id, name, image, status, species, type, gender}) => (
        <li key={id}>
          
<img src={image} alt={name} ></img>
<div>
  {name} 
  {/* <br/>
  {status}
  <br/>
  {type}
  <br/>
  {gender} */}
</div>
        </li>
      ))}
    
    
    
   </ol>
  );
}
