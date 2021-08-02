import React, {  useEffect, useState } from 'react'
import useAuth from './useAuth'
import './App.css'
import PlaylistFetch from './PlaylistFetch'
import './SideBar.css'
import SideBar from './SideBar'
import axios from 'axios'
import Player from './Player'

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [currentGenre, setCurrentGenre] = useState("Category");
    const [genrePlaylists, setGenrePlaylists] = useState([])

    function handleGenreChange(event) {
        setCurrentGenre(event)
    }

    console.log(currentGenre)

    useEffect(() => {
        if(currentGenre !== "Category"){
            axios.get(`https://api.spotify.com/v1/browse/categories/${currentGenre}/playlists?limit=12`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ` + accessToken
            }
            })
            .then(resp => setGenrePlaylists(resp.data.playlists.items))
            .catch((error) => console.log(error))
        }else{
            setGenrePlaylists([])
        }
    }, [currentGenre])

    return (
        <div className="dashboard">
            <header className="header">
                {/* SearchBar Component + logo */}
            </header>
            <aside className="side-bar">
                <SideBar accessToken={accessToken} handleGenreChange={handleGenreChange} currentGenre={currentGenre}/>
            </aside>
            <div className="playlist-song-container">
                <PlaylistFetch accessToken={accessToken} genrePlaylists={genrePlaylists} />
            </div>
            <div>
                <Player accessToken={accessToken}/>
            </div>
        </div>
    )
}