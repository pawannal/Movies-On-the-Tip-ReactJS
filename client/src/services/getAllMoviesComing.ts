import axios from "axios";
import IMovieComing from "../models/IMovieComing";

const getAllMoviesComing = async () => {
    const getbaseAPIUrl = "http://localhost:4000/movies-coming";
    console.log(getbaseAPIUrl);
    const responseData = await axios.get<IMovieComing[]>(getbaseAPIUrl);
return responseData.data
}
export { getAllMoviesComing};