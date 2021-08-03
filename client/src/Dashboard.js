import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import PlaylistFetch from './PlaylistFetch'
import SideBar from './SideBar'
import './SideBar.css'
import Player from './Player'
import SongListContainer from './SongListContainer'
// import SearchBar from './SearchBar'

export default function Dashboard({ accessToken }) {
    const [currentGenreID, setCurrentGenreID] = useState("");
    const [genrePlaylists, setGenrePlaylists] = useState([])
    const [songList, setSongList] = useState([]);
    const [nextUrl, setNextUrl] = useState('')
    const [playingTrack, setPlayingTrack] = useState()
    const [searchInput, setSearchInput] = useState('')
    const [searchResponse, setSearchResponse] = useState([])

    function handleGenreChange(id) {
        setCurrentGenreID(id)
    }

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


    function handlePlaylistClick(id) {
        fetchSongs(id, nextUrl)
        setSongList([])
    }

    function fetchSongs(id='', nextUrl) {
        axios.get((nextUrl==='' ? `https://api.spotify.com/v1/playlists/${id}/tracks?market=US&limit=25` : nextUrl) , {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ` + accessToken
            }
        })
        .then(resp => {
            setSongList(resp.data.items)
            setNextUrl(resp.data.next)
        })
        .catch((error) => console.log(error))
    }


    function chooseTrack(track) {
        setPlayingTrack(track)
    }

    function loadMoreSongs() {
        fetchSongs(nextUrl)
    }

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
                <SongListContainer songList={songList} chooseTrack={chooseTrack} loadMoreSongs={loadMoreSongs} />
                }
                {playingTrack ? <Player accessToken={accessToken} trackUri={playingTrack} /> : null}
            </div>
        </div>
    )
}