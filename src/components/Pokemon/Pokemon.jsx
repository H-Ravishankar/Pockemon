import { Link } from "react-router-dom";

function Pokemon({name,image,id}){
    return(
        <div className=" grid basis-40 mt-10 p-10 mr-25 ml-24 items-center hover:bg-yellow-100 ">  
            <Link to={`/pokemon/${id}`}>
            <div className="font-semibold tracking-wider"> {name} </div>
            <div><img className =" h-25 "  src= {image} />
            </div>
            </Link> 
        </div>
    )

}
export default Pokemon;