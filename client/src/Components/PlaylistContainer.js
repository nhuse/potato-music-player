import React from 'react';
import PlaylistRender from './PlaylistRender';
import '../Styling/PlaylistContainer.css'

function PlaylistContainer({ playlists, handlePlaylistClick }) {
    return (
        <div className="playlist-flex-container">
            {playlists.map(playlist => <PlaylistRender key={playlist.id} playlist={playlist} handlePlaylistClick={handlePlaylistClick} />)}
        </div>
    )
}

export default PlaylistContainer;