import React from 'react';
import PlaylistRender from './PlaylistRender';

function PlaylistContainer({playlistResp}) {
    console.log({playlistResp})
    const playlistList = playlistResp.data.items
    return (
        <>
            {
            playlistList.map(playlist => <PlaylistRender key={playlist.id} playlist={playlist}/>)
            }
        </>
    );
}

export default PlaylistContainer;