import axios from 'axios'
import { useEffect, useState } from 'react'
import PlaylistContainer from './PlaylistContainer'


export default function PlaylistFetch({ accessToken, genrePlaylists, handlePlaylistClick }) {
    
    const [playlistResp , setPlaylistResp] = useState([])// will hold response from playlist get
    console.log(genrePlaylists)

    useEffect(() => {
        if(accessToken) {
            axios.get(`https://api.spotify.com/v1/me/playlists?limit=12`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + accessToken
                }
            })
            .then(resp => setPlaylistResp(resp.data.items))
            .catch((error) => console.log(error))
        }
    }, [accessToken])


    if(!accessToken || playlistResp.length === 0) return null

    console.log(playlistResp)
    
    return (
        genrePlaylists.length > 0 ? <PlaylistContainer handlePlaylistClick={handlePlaylistClick} playlists={genrePlaylists} /> : <PlaylistContainer playlists={playlistResp} handlePlaylistClick={handlePlaylistClick} />
    )
}