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
    const [currentGenreID, setCurrentGenreID] = useState("");
    const [genrePlaylists, setGenrePlaylists] = useState([])
    const [playlistID, setPlaylistID] = useState("")
    const [songList, setSongList] = useState([]);

    function handleGenreChange(id) {
        setCurrentGenreID(id)
    }

    function handlePlaylistClick(id) {
        setPlaylistID(id)
    }

    useEffect(() => {
        if(playlistID !== "") {
            axios.get(`https://api.spotify.com/v1/playlists/${playlistID}/tracks?market=US&limit=25` , {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + accessToken
                }
            })
            .then(resp => console.log(resp))
            .catch((error) => console.log(error))
        }
    }, [playlistID])

    console.log(currentGenreID)

    useEffect(() => {
        if(currentGenreID !== ""){
            axios.get(`https://api.spotify.com/v1/browse/categories/${currentGenreID}/playlists?limit=12`, {
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
    }, [currentGenreID])

    //works with the player -TK
    const [playingTrack, setPlayingTrack] = useState()
    
    //chooseTrack function needs to be passed down to use in a click event handler so that the clicked track plays
    //the track data will pass from the playlist/search components -TK
    // function chooseTrack(track) {
    //     setPlayingTrack(track)
    // }
s
    return (
        <div className="dashboard">
            <header className="header">
                {/* SearchBar Component + logo */}
            </header>
            <aside className="side-bar">
                <SideBar accessToken={accessToken} handleGenreChange={handleGenreChange} />
            </aside>
            <div className="playlist-song-container">
                <PlaylistFetch accessToken={accessToken} genrePlaylists={genrePlaylists} handlePlaylistClick={handlePlaylistClick} />
            </div>
            <div>
                <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
            </div>
        </div>
    )
}