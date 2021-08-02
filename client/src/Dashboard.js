import React, {  useState } from 'react'
import useAuth from './useAuth'
import './App.css'
import PlaylistFetch from './PlaylistFetch'
import './SideBar.css'
import SideBar from './SideBar'

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [currentGenre, setCurrentGenre] = useState(null);

    function handleGenreChange(event) {
        console.log(event)
    }

    // https://api.spotify.com/v1/browse/categories/{category_id}

    return (
        <div className="dashboard">
            <header className="header">
                {/* SearchBar Component + logo */}
            </header>
            <aside className="side-bar">
                <SideBar accessToken={accessToken} handleGenreChange={handleGenreChange} />
            </aside>
            <div className="playlist-container">
                <PlaylistFetch accessToken={accessToken} genre={currentGenre}/>
            </div>
        </div>
    )
}