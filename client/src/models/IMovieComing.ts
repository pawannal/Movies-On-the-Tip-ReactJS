import { Url } from "url";


interface IMovieComing {
    id: number,
    title: string,
    year: number,
    genres: string,
    ratings:number,
    poster: string,
    contentRating: number,
    duration: number,
    releaseDate: Date,
    averageRating: number,
    originalTitle: null,
    storyline: string,
    actors:string,
    imdbRating: null,
    posterurl:Url

}
export default IMovieComing;