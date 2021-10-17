import React, {useState, useEffect} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'


export default function Player({ accessToken, trackUri, songURIs, offset, clickedRecentlyPlayed }) {

    const [play, setPlay] = useState(false)

    useEffect(() => {
        setPlay(true)
    }, [trackUri])
    
    if (!accessToken) return null
    if(!clickedRecentlyPlayed){
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
    }else {
    return <SpotifyPlayer 
        token={accessToken}
        showSaveIcon
        autoPlay={true}
        play={play}
        uris={trackUri}
        initialVolume={.5}
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
}