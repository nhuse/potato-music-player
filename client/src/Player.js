import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({ accessToken }) {
    return <SpotifyPlayer token={accessToken}
    uris={[]}
    styles={{
        activeColor: '#fff',
        bgColor: '#333',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
    //   initialVolume={1}
    //   play={false}
    //   showSaveIcon={true}

    />
}