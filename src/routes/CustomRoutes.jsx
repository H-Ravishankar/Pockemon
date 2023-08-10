import { Routes, Route } from "react-router-dom";
import Pockemonlist from "../components/PockemonList/pockemonList";
import PokemonDetails from "../components/PokemonDetails/PokemomDetails";
function CustomRoutes(){
    return(

        <Routes>
             <Route  path="/" element={<Pockemonlist/>}/>
             <Route path="/pokemon/:id" element={<PokemonDetails/>}/>

        </Routes>

    );

}
export default CustomRoutes;