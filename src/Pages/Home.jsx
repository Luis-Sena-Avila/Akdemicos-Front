import React from 'react'
import { Latex } from 'react-latex';

const Home = () => {
  const fraccion=`$$\int 2$$`
  return (
    <div>
        {fraccion}
    </div>
  )
}

export default Home