import React from 'react';
import '../Styling/PlaylistRender.css'

function PlaylistRender({ playlist:{id, name, tracks, images}, handlePlaylistClick }) {
    let image = ''
    images.length === 0 ? image='https://www.pngall.com/wp-content/uploads/2016/04/Compact-Disk-Download-PNG.png' : image=images[0].url
    return (
        <div className="card">
            <div className="playlist-info" onClick={() => {
                handlePlaylistClick(id)
            }}>
                <img src={image} className="playlist-img" />
                <h5>{name}</h5>
                <p>{tracks.total} Songs</p>
            </div>
        </div>
    );
}

export default PlaylistRender;