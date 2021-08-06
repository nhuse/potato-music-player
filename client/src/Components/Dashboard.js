import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import '../Styling/App.css'
import PlaylistFetch from './PlaylistFetch'
import SideBar from './SideBar'
import '../Styling/SideBar.css'
import Player from './Player'
import SongListContainer from './SongListContainer'
// import SearchBar from './SearchBar'
import {Redirect} from 'react-router-dom'

export default function Dashboard({ accessToken }) {
    const [currentGenreID, setCurrentGenreID] = useState(null)
    const [genrePlaylists, setGenrePlaylists] = useState([])
    const [songList, setSongList] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [recentlyPlayedTrack, setRecentlyPlayedTrack] = useState([])
    // const [searchInput, setSearchInput] = useState('')
    // const [searchResponse, setSearchResponse] = useState([])

    console.log(recentlyPlayedTrack);

    
    function handleGenreChange(id) {
        setCurrentGenreID(id)
    }

    useEffect(() =>{

    })
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

    function chooseTrack(track, song) {
        setPlayingTrack(track)
        console.log(song)
        if(containsSong(song, recentlyPlayedTrack) === true) {
            let newArr = recentlyPlayedTrack.filter(item => {
                console.log(item)
                return (item.track.id !== song.track.id)
            })

            if(recentlyPlayedTrack.length >= 5) {
                setRecentlyPlayedTrack([song, ...newArr.slice(0, 5)])
            }else {
                setRecentlyPlayedTrack([song, ...newArr])
            }
        } else {
            if(recentlyPlayedTrack.length >= 5) {
                setRecentlyPlayedTrack([song, ...recentlyPlayedTrack.slice(0, 4)])
            }else {
                setRecentlyPlayedTrack([song, ...recentlyPlayedTrack])
            }
        }
    }

    function containsSong(song, recentlyPlayedTrack) {
        let i;
        console.log(recentlyPlayedTrack)
        for (i = 0; i < recentlyPlayedTrack.length; i++) {
            if(recentlyPlayedTrack[i].track.id === song.track.id){
                return true
            } 
        }
        return false
    }

    // function onSearchChange(event) {
    //     setSearchInput(event.target.value)
    // }

    if(!accessToken) {
        return <Redirect to="/login" />
    }else {
        return (
            <div className="dashboard">
                <aside className="side-bar">
                    <SideBar accessToken={accessToken} handleGenreChange={handleGenreChange} recentlyPlayedTrack={recentlyPlayedTrack} chooseTrack={chooseTrack}/>
                </aside>
                <div className="playlist-song-container">
                {songList.length === 0 ? 
                    <PlaylistFetch accessToken={accessToken} genrePlaylists={genrePlaylists} handlePlaylistClick={handlePlaylistClick} />
                    :
                    <SongListContainer songList={songList} chooseTrack={chooseTrack} />
                    }
                </div>
                <div className="player-container">
                    {playingTrack ? <Player accessToken={accessToken} trackUri={playingTrack} songList={songList}/> : null}
                </div>
            </div>
        )
    }
}