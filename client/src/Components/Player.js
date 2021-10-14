import React, {useState, useEffect} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'


export default function Player({ accessToken, trackUri, songURIs, offset }) {

    const [play, setPlay] = useState(false)

    useEffect(() => {
        setPlay(true)
    }, [trackUri])
    
    if (!accessToken) return null
    return <SpotifyPlayer 
        token={accessToken}
        showSaveIcon
        autoPlay={true}
        play={play}
        initialVolume={.5}
        uris={songURIs}
        offset={offset}
        styles={{
            activeColor: '#fff',
            bgColor: '#333',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
        }}
    />
}