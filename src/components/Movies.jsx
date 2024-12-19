import { NavLink, useParams } from "react-router-dom";
import Movie from "./Movie";

const Movies = ()=>{

    const {genere, year} = useParams();

    return <>
        <div className="btn-group">
            <NavLink to='/movies/Action/2023' className='btn btn-primary' >Action</NavLink>
            <NavLink to='/movies/Horror/2023' className='btn btn-primary' >Horror</NavLink>
            <NavLink to='/movies/Comedy/2023' className='btn btn-primary' >Comedy</NavLink>
            <NavLink to='/movies/Drama/2023' className='btn btn-primary' >Drama</NavLink>
        </div>
        <br/>
        <Movie genere={genere} year={year}/>
    </>
} 

export default Movies;