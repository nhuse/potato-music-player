import axios from 'axios'
import { useEffect, useState } from 'react'
import PlaylistContainer from './PlaylistContainer'


export default function PlaylistFetch({ accessToken }) {
    
    const [playlistResp , setPlaylistResp] = useState(null)// will hold response from playlist get

    console.log(accessToken)


    useEffect(() => {
        if(accessToken) {
            console.log('axios request started')
            axios.get(`https://api.spotify.com/v1/me/playlists`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + accessToken
                }
            })
            .then(resp => setPlaylistResp(resp))
            .catch((error) => console.log(error))
        }
    }, [accessToken])
    
    if(!accessToken) return null

    console.log(playlistResp)

    return (
        playlistResp ? <PlaylistContainer playlistResp={playlistResp} /> : <h1>Loading Playlists...</h1>
    )
}