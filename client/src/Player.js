import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'


export default function Player({ accessToken }) {
    return <SpotifyPlayer token={accessToken}
        showSaveIcon
        uris={[]}
    />
}