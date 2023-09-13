import Images from "../../Assets/ImageLink"
import { useState,useEffect } from "react"

const Movie_Navbar = () => {
  const [Show,setShow] = useState(false)

  const TransitionEffect = () => {
    window.scrollY>100? setShow(true) : setShow(false)
  }

  useEffect(()=>{
   window.addEventListener("scroll",TransitionEffect)
   return ()=>window.removeEventListener("scroll",TransitionEffect)
  },[])


  return (
    <nav className={`Nav ${Show && "Nav_Black"}`}>

    <div className='Nav_Contents'>
        <img src={Images.Logo} alt='Logo' className='Logo'/>

        <img src={Images.Profile} alt='Profile' className='Profile'/>

    </div>

</nav>
  )
}

export default Movie_Navbar