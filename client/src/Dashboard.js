import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'
// import SpotifyPlayer from 'react-spotify-web-playback'
import Player from './Player'
import PlaylistBar from './PlaylistBar'

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)

    const [playingTrack, setPlayingTrack] = useState()
    
    //needs to be passed down to use in a click event handler so that the clicked track plays
    //the track data will pass from the playlist/search components
    function chooseTrack(track) {
        setPlayingTrack(track)
    }

    return (
        <div>
            <div>
                <h1>
                    This is where we will put our wireframe design
                </h1>
                <PlaylistBar accessToken={accessToken}/>
            </div>
            <div>
                {/* will need track data from search/playlist components */}
                <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
            </div>
        </div>
    )
}