import Link from "../../Assets/VideoLink"
import { useState,useEffect } from "react"
import YT from "../../Assets/YT"

const Movie_Modal = ({value,base_url,Play,ExecuteModalFalse,movie,movies}) => {
  const [video,setVideo] = useState(undefined)
  
  if(movies){
    let singleMovie = movies.find(x=>{
        return x.id == value
    })
    movie = singleMovie
  }

  useEffect(()=>{
                    let name = movie.original_name??movie.title??movie.original_title??movie.name; 
                    name += " " + movie.overview + movie.release_date
                    name = name.replaceAll(" ","%20")
                    name+= "%20trailer"  
                   
                    let URL = `${YT.YT_URL}&q=${name}&key=${YT.YT_API}`

                    for(let i in Link){
                        if(movie.id==Link[i].id) return setVideo(Link[i].link)
                    }     
                    
                    if(video == undefined){
                        fetch(URL).then(res=>res.json())
                        .then(data=>{
                            console.log('Api Running')
                            Link.push({id:movie.id,link:data?.items[0]?.id?.videoId})
                            return setVideo(data?.items[0]?.id?.videoId)
                        })
                        .catch(()=>{
                            console.log('Api Error: Need to update API Key')
                            Link.push({id:movie.id,link:"dhh2aIucDSE"})
                            return setVideo("dhh2aIucDSE")
                        })
                    }
  },[])

  return (

    <div className='Modal_Blur'>

        <div className="Modal">

            <div className='Modal_Contents' key={movie?.id}>

                <div className='Modal_Media'>

                    <div className='Modal_Player'>

                        <div className='Youtube' key={movie?.id}>
                                                
                            <div className='Poster_Div' id="poster">
                                <img src={`${base_url}${movie?.backdrop_path}`}/>
                            </div>
            
                            <div className='Video_Div' style={{display:"none"}} id='video'>
                                <iframe id="frame" width="100%" height="100%" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player"></iframe>
                            </div>
            
                        </div> 

                    </div>

                    <div className='Modal_Buttons'>
                        <button onClick={Play}>Play</button>
                        <button onClick={ExecuteModalFalse}>Close</button>
                    </div>

                </div>
          
                <div className='Modal_Details'>
                    <h3><span>Title:</span> &nbsp; {movie?.title || movie?.original_name}</h3>
                    <h3 style={{textTransform:"Capitalize"}}><span>Type / Language:</span> &nbsp; {movie?.media_type || "movie"} &nbsp;-&nbsp;{movie?.original_language || "en"}</h3>
                    <h3><span>Release Date:</span> &nbsp; {movie?.release_date || "Not Available"}</h3>
                    <h3><span>Rating:</span> &nbsp; {Math.floor(movie?.vote_average)}</h3>
                    <h3><span>Description:</span> &nbsp; {movie?.overview || "Not Available"}</h3>
                </div>

            </div>
                     
        </div>

    </div>

  )
}

export default Movie_Modal