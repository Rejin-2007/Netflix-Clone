import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './index.css'
import Banner from './Components/Banner/Banner.js'
import RowPost from './Components/RowPost/RowPost'
import { ActionMovies, ComedyMovies, Documentaries, HorrorMovies, originals, RomanceMovies, trending} from './Constants/constant.js'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title="Netflix Original" url={originals}/>
        <RowPost title="Trending" isSmall url={trending}/>
        <RowPost title="Action" isSmall url={ActionMovies}/>
        <RowPost title="Romance" isSmall url={RomanceMovies}/>
        <RowPost title="Horror" isSmall url={HorrorMovies}/>
        <RowPost title="Comedy" isSmall url={ComedyMovies}/>
        <RowPost title="Documentaries" isSmall url={Documentaries}/>

    </div>
  );
}
export default App;