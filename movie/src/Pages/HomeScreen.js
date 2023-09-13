import Movie_Banner from "../Components/Banner/Movie_Banner"
import Movie_Navbar from "../Components/Nav/Movie_Navbar"
import Movie_Row from "../Components/Row/Movie_Row"
import Request from "../Assets/API" 

const HomeScreen = () => {
  return (
    <div>
    <Movie_Navbar/>
   
    <Movie_Banner/>

    <Movie_Row Category="Trending Now" Get={Request.GetTrending} Large={true}/>  
    <Movie_Row Category="Action Movies" Get={Request.GetActionMovies}/>  
    <Movie_Row Category="Comedy Movies" Get={Request.GetComedyMovies}/>  
    <Movie_Row Category="Horror Movies" Get={Request.GetHorrorMovies}/>  
    <Movie_Row Category="Romance Movies" Get={Request.GetRomanceMovies}/>  
    <Movie_Row Category="Documentries" Get={Request.GetDocumentaries}/>
    <Movie_Row Category="Top Rated" Get={Request.GetTopRated}/>  

    </div>
  )
}

export default HomeScreen