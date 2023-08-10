import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import Search from "../search/Search";

function Pockemonlist(){

    const [pockemonList,setPockemonList] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [pokedexUrl,setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon'); 

    const [nextUrl,setNextUrl] = useState('');
    const [prevUrl,setPrevUrl] = useState('');

    async function downloadPockemon(){

        setIsLoading(true)
        const response = await axios.get(pokedexUrl) // downloads the list of 20 pockemons
         console.log (response.data)
         setNextUrl(response.data.next);
         setPrevUrl(response.data.previous);


        const pockemonResults = response.data.results; // we get the array of pockemons from result
        
        //iterating over the array of pokemons, and using their url , to create an array of promises that will download 20 poke
        const pockemonResultPromise = pockemonResults.map((pockemon)=> axios.get(pockemon.url))
        
        //passing that promise array to axios.all
        const pockemonData = await axios.all(pockemonResultPromise);

        console.log(pockemonData)
        
        // now iterate on the data of each poke and extract id, name , image git-  53:00
        const pokeListResult = pockemonData.map((pokeData)=> { const pockemon = pokeData.data;

            return {
                id : pockemon.id,
                name  : pockemon.name, 
                image : (pockemon.sprites.other) ? pockemon.sprites.other.dream_world.front_default : pockemon.sprites.front_shiny,
                types : pockemon.types
             }

        })
        console.log(pokeListResult)
        setPockemonList(pokeListResult)
        setIsLoading(false)
}

useEffect(()=>{
    
    downloadPockemon();
   
},[pokedexUrl])


    return (
        <>

        <div className='mt-5 border-black w-full rounded-full flex place-content-center'>
        <Search/>
        </div>
        
        <div className="flex flex-wrap content-evenly"> 
        {(isLoading)?'Loading.......': pockemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>) }
        </div>
        
        <div className="flex place-content-center space-x-1"> 
            <button className="bg-indigo-200 p-2 border-b-4 hover:border-indigo-400  rounded" disabled={prevUrl == null} onClick={()=>setPokedexUrl(prevUrl)}>Prev</button>
            
            <button className="bg-indigo-200 p-2 border-b-4 hover:border-indigo-400 rounded " disabled={nextUrl == null}onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
        </div>
       
        </>
    )
}
export default Pockemonlist;