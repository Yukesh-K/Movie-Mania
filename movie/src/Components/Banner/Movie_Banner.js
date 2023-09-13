import Request, {Axios} from "../../Assets/API"
import { useState,useEffect } from "react"
import Modal from "../Modal/Movie_Modal"

const Movie_Banner = () => {

  const [movie,setMovie] = useState([])
  const [modal,setModal] = useState(false)
  const [value,setValue] = useState(null)
  const [Banner,setBanner] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      const fetchMovies = await Axios(Request.GetTrending)
      setMovie(
          fetchMovies.data.results[
              Math.floor(Math.random() * fetchMovies.data.results.length-1)
          ]
      )

      return fetchMovies
    }
    fetchData()
  },[])
  
  useEffect(()=>{setTimeout(()=>{setBanner(false)},2000)})

  function truncateData(string,number){
      return string?.length >  number? string.substr(0,number-1)+"..." : string
  }

  const base_url = "https://image.tmdb.org/t/p/original/"

  const ExecuteModalFalse = () => setModal(false)

  const ExecuteModal = () => {
      setModal(true)
      let Element = document.getElementById("movieId")
      setValue(Number(Element.innerHTML))
  }

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
    <header className={`Banner ${Banner && "Full_Banner"}`}
      style={{
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?(movie?.backdrop_path||"/Aukfa8dk6B5OxuelbaPBOJYXaBI.jpg"):"/Aukfa8dk6B5OxuelbaPBOJYXaBI.jpg"}")`,
      }}
    >

        <div className='Banner_Contents'>

                  <h1 className='Banner_Title'>
                      {movie?.title || movie?.name || movie?.originalName}
                  </h1>

                  <div className="Banner_Buttons" >
                    <button onClick={ExecuteModal} className='Banner_Button'>PLAY <span style={{display:"none"}} id='movieId'>{movie.id}</span></button>
                  </div>

                  <h1 className='Banner_Description'>
                    {truncateData(movie?.overview,150)}
                  </h1>
                  
        </div>

        
        {
        modal && <Modal value={value} base_url={base_url} movie={movie} Play={Play} ExecuteModalFalse={ExecuteModalFalse}/>
        } 

  </header>  )
}

export default Movie_Banner