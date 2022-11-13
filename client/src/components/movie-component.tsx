import { useEffect } from "react";
import { getAllMoviesComing } from "../services/getAllMoviesComing";
const MovieComponent =  () => {

useEffect (() => {
 const getAllMoviesComingInvoker = async () => {
    const resposeData = await getAllMoviesComing();
    console.log(resposeData)
}
getAllMoviesComingInvoker();
},[]);
    return(
        <div>
            Movie Component Created.....
        </div>

    )
    }
export{MovieComponent};