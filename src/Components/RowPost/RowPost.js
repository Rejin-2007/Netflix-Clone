import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {  API_KEY, imageUrl } from '../../Constants/constant'
import axios from 'axios'
import YouTube from 'react-youtube'

function RowPost({title,isSmall,url}) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
      axios.get(`${url}` ).then(response =>{
        console.log(response)
        setMovies(response.data.results)
      })
    }, [url])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        }
    };
    const handleMovie = (id) =>{
        console.log(id)
        axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            if (response.data.results.length !== 0) {
            setUrlId(response.data.results[0])
            } else {
            alert("Trailer of this Movie Is Not Available")
            }
        })
        .catch((error) => {
            console.error('Error fetching movie videos:', error);
            alert('An error occurred while fetching the movie trailer');
        });
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {movies.map((obj,index) =>
                    <img key={index} onClick={() => handleMovie(obj.id)}loading='lazy' className={isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                )}
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost