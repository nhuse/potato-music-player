import React from 'react';
import PlaylistRender from './PlaylistRender';
import './PlaylistContainer.css'

function PlaylistContainer({ playlists, handlePlaylistClick }) {
    console.log(playlists)
    return (
        <div className="playlist-flex-container">
            {playlists.map(playlist => <PlaylistRender key={playlist.id} playlist={playlist} handlePlaylistClick={handlePlaylistClick} />)}
        </div>
    )
}

export default PlaylistContainer;