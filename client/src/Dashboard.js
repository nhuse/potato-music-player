import React, {  useEffect, useState } from 'react'
import useAuth from './useAuth'
import SpotifyPlayer from 'react-spotify-web-playback'
import './App.css'
import PlaylistFetch from './PlaylistFetch'
import './SideBar.css'
import SideBar from './SideBar'
import axios from 'axios'
import Player from './Player'
import SearchBar from './SearchBar'

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [currentGenreID, setCurrentGenreID] = useState("");
    const [genrePlaylists, setGenrePlaylists] = useState([])
    const [playlistID, setPlaylistID] = useState("")
    const [songList, setSongList] = useState([]);

    // begin eli changes
    const [search, setSearch] = useState("")
    console.log({search})
    const [searchResponse, setSearchResponse] = useState([])
    // end eli changes

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
    return (
        <div className="dashboard">
            <header className="header">
                {/* Eli searchbar maybe also add potato logo*/}
                <SearchBar accessToken={accessToken} search={search} setSearch={setSearch} searchResponse={searchResponse} setSearchResponse={setSearchResponse} /> 
            </header>
            <aside className="side-bar">
                <SideBar accessToken={accessToken} handleGenreChange={handleGenreChange} />
            </aside>
            <div className="playlist-song-container">
                <PlaylistFetch accessToken={accessToken} genrePlaylists={genrePlaylists} handlePlaylistClick={handlePlaylistClick} />
            </div>
            <div>
                {/* will need track data from search/playlist components */}
                <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
            </div>
        </div>
    )
}