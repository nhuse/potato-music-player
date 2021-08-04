import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import PlaylistFetch from './PlaylistFetch'
import SideBar from './SideBar'
import './SideBar.css'
import Player from './Player'
import SongListContainer from './SongListContainer'
// import SearchBar from './SearchBar'
import {Redirect} from 'react-router-dom'

export default function Dashboard({ accessTokenHook: accessTokenHook, isLoggedIn }) {
    const accessToken = accessTokenHook
    const [currentGenreID, setCurrentGenreID] = useState("")
    const [genrePlaylists, setGenrePlaylists] = useState([])
    const [songList, setSongList] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [searchInput, setSearchInput] = useState('')
    const [searchResponse, setSearchResponse] = useState([])
    console.log({accessToken})
    // if (!isLoggedIn) return <Redirect to="/login" />;
    function handleGenreChange(id) {
        setCurrentGenreID(id)
    }

    useEffect(() => {
        if(currentGenreID === ""){
            axios.get(`https://api.spotify.com/v1/me/playlists?limit=20`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + accessToken
                }
            })
            .then(resp => {
                setSongList([])
                setGenrePlaylists(resp.data.items)
            })
            .catch((error) => console.log(error))
        }
        else{
            axios.get(`https://api.spotify.com/v1/browse/categories/${currentGenreID}/playlists?limit=20`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + accessToken
                }
                })
                .then(resp => {
                    setSongList([])
                    setGenrePlaylists(resp.data.playlists.items)
                })
            .catch((error) => console.log(error))
        }
    }, [currentGenreID])


    function handlePlaylistClick(id) {
        console.log(id)
        axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks?market=US` , {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ` + accessToken
            }
        })
        .then(resp => {
            setSongList(resp.data.items)
        })
        .catch((error) => console.log(error))  
    }


    function chooseTrack(track) {
        setPlayingTrack(track)
    }

    console.log(songList)

    // function onSearchChange(event) {
    //     setSearchInput(event.target.value)
    // }

    return (
        <div className="dashboard">
            <header className="header">
                {/* <SearchBar accessToken={accessToken} searchInput={searchInput} onSearchChange={onSearchChange} searchResponse={searchResponse} setSearchResponse={setSearchResponse} /> */}
            </header>
            <aside className="side-bar">
                <SideBar accessToken={accessToken} handleGenreChange={handleGenreChange} />
            </aside>
            <div className="playlist-song-container">
                {songList.length === 0 ? 
                <PlaylistFetch accessToken={accessToken} genrePlaylists={genrePlaylists} handlePlaylistClick={handlePlaylistClick} />
                :
                <SongListContainer songList={songList} chooseTrack={chooseTrack} />
                }
                <div className="player-container">
                    {playingTrack ? <Player accessToken={accessToken} trackUri={playingTrack} /> : null}
                </div>
            </div>
        </div>
    )
}