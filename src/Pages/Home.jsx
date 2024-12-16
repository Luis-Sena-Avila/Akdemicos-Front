import React from 'react'
import "../Styles/Home.css"
import { Latex } from 'react-latex';

const Home = () => {
  const fraccion=`$$\int 2$$`
  return (
    <div className='home'>
        Hola soy el home
    </div>
  )
}

export default Home