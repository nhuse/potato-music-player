import axios from 'axios'
import { useEffect } from 'react'

export default function PlaylistBar({ accessToken }) {

    console.log(accessToken)

    useEffect(() => {
        if(accessToken) {
            axios.get(`https://api.spotify.com/v1/me/playlists`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + accessToken
                }
            })
            .then(resp => console.log(resp))
            .catch((error) => console.log(error))
        }
    }, [accessToken])

    if(!accessToken) return null

    return (
        <>
        </>
    )
}