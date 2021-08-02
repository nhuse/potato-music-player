import React, { useState, useEffect, useRef }   from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

// There are three state values that we should maintain:

// trackIndex - The index of the track that's being played.
// trackProgress - The current progress of the track.
// isPlaying - Whether or not the track is being played.

function Player({ tracks }) {

    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    return (

    )

}


export default function Player({ accessToken }) {
    return <SpotifyPlayer token={accessToken}
    showSaveIcon
    uris={[]}
    />
}