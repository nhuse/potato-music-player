import { useState, useEffect } from 'react'
import '../Styling/SideBar.css'
import axios from 'axios'
import CDImage from '../Images/cd.png'

export default function SideBar({ accessToken, handleGenreChange, recentlyPlayedTrack, chooseTrack }) {
    const [genreList, setGenreList] = useState(null)
    const [userImg, setUserImg] = useState('')


    useEffect(() => {
        if(accessToken) {
            axios.get('https://api.spotify.com/v1/browse/categories?limit=5', {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + accessToken
                }
            })
            .then(resp => setGenreList(resp))
            .catch(error => console.log(error))
            axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + accessToken
                }
            })
            .then(resp => setUserImg(resp.data.images[0].url))
            .catch(error => console.log(error))
        }
    }, [accessToken])

    if(genreList){
        return (
            <>
                <h3 className="genre-ul-title">Genres</h3>
                <ul className = "genre-ul">
                    <li className="genre-li-container" id="user-library" onClick={() => handleGenreChange("") }>
                        <img className="genre-li-img" src={userImg} />
                        <span className="genre-li-span">
                                <p>Your Library</p>
                        </span>
                    </li>
                    {genreList.data.categories.items.map(genre => {
                        return (
                        <li key={genre.id} className="genre-li-container" onClick={() => handleGenreChange(genre.id)}>
                            <img className="genre-li-img" src={genre.icons[0].url} />
                            <span className="genre-li-span">
                                <p>{genre.name}</p>
                            </span>
                        </li>
                        )
                    })}
                </ul>
                <h3>Recently Played</h3>
                <ul className="recently-played-ul">
                    
                    {recentlyPlayedTrack.map(mostRecent => {
                        return (
                        <li key={mostRecent.track.id} className="recently-played-li-container"  onClick={() => {
                            chooseTrack(mostRecent.track.uri, mostRecent)
                        }}>
                            <img src={mostRecent.track.album.images[0].length === 0 ? 
                            CDImage
                            : 
                            mostRecent.track.album.images[0].url}
                            className="recent-img"/>
                            <div className="most-recent-info">
                                <p className="most-recent-name">{mostRecent.track.name}</p>
                                <p className="most-recent-artist-name">{mostRecent.track.artists[0].name}</p>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </>
        )
    }
    return null;
}