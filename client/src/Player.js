import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'


function Player {

    return (
        
    )

}


export default function Player({ accessToken }) {
    return <SpotifyPlayer token={accessToken}
    showSaveIcon
    uris={[]}
    />
}