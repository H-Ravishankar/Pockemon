import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails(){
   const {id} = useParams();
   const[pokemon,setPokemon] = useState([]);

   async function downloadPokemon(){

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

     setPokemon({
            name  : response.data.name,
            image : response.data.sprites.other.dream_world.front_default,
            weight : response.data.weight,
            height : response.data.height,
            types  : response.data.types.map((t)=> t.type.name)
     })

   }


   useEffect(()=>{
      downloadPokemon();
   },[]);

     return(
        <div className="grid place-content-center h-screen bg-slate-950"> 
           
            <img className="ml-10" src= {pokemon.image}/>
            <div className="bg-white text-black p-16  mt-4 font-extrabold rounded hover:bg-yellow-300">
            <div className=""> Name : {pokemon.name} </div>
            <div> Height : {pokemon.height} </div>
            <div> Weight : {pokemon.weight} </div>
            <div> Pokemon-Types : {pokemon.types &&pokemon.types.map((t) => <div> 
               {t}
            </div> )}</div>
            </div>
            
        </div>
     );
}
export default PokemonDetails;