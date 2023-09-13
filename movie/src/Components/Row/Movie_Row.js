import {useEffect, useState } from 'react'
import {Axios} from "../../Assets/API"
import Modal from "../Modal/Movie_Modal"

const Movie_Row = ({Get,Category,Large = false}) => {
  const [movies,setMovies] = useState([])
  const [modal,setModal] = useState(false)
  const [value,setValue] = useState(null)

  const ExecuteModalFalse = () => setModal(false)

  const ExecuteModal = (e) => {
      setModal(true)
      setValue(e.target.alt)
  }

  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(()=>{
      const fetchData = async () =>{
          const fetchResult = await Axios.get(Get)
          setMovies(fetchResult.data.results)
          return fetchResult
      }
      fetchData()
  },[fetch])

  const Play = () =>{
      let Element = document.getElementById("frame")
      const Source = Element.getAttribute("src")+"?autoplay=1"
      Element.setAttribute('src', Source)

      const Frame = document.getElementById("video")
      const Poster = document.getElementById("poster")
      Poster.style.display="none"
      Frame.style.display="block"
  }

  return (
   <div className='Row'>        
        <h1>{Category}</h1>
        
        <div className='Row_Posters'>
            {movies && movies.map(movie=>(
            <img onClick={ExecuteModal} alt={movie.id} key={movie.id} src={`${base_url}${Large ? (movie.poster_path || "/Aukfa8dk6B5OxuelbaPBOJYXaBI.jpg") : (movie.backdrop_path || "/Aukfa8dk6B5OxuelbaPBOJYXaBI.jpg")}`} className={`Row_Poster ${Large && "Row_PosterLarge"}`}/>
            ))}
        </div>

        {
            modal &&  <Modal value={value} base_url={base_url} movies={movies} Play={Play} ExecuteModalFalse={ExecuteModalFalse}/>
        }
   </div>
  )
}

export default Movie_Row