import { useState, useEffect } from 'react'
import './SideBar.css'
import { DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import axios from 'axios'

export default function SideBar({ accessToken, handleGenreChange }) {
    const [genreList, setGenreList] = useState(null)
    const [userImg, setUserImg] = useState('')

    useEffect(() => {
        if(accessToken) {
            axios.get('https://api.spotify.com/v1/browse/categories?limit=6', {
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
    
    console.log(genreList)

    if(genreList){
        return (
            <>
                <h2 className="genre-ul-title">Genres</h2>
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
                <div className="recently-played">
    
                </div>
            </>
        )
    }
    return null;
}