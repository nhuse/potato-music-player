import SongRender from './SongRender'
import './SongRender.css'

export default function SongListContainer({ songList, loadMoreSongs, chooseTrack }){
    return(
        <>
            <ul className="song-ul">
                {songList.map(song => {
                    {console.log(song)}
                    <SongRender key={song.track.id} song={song} chooseTrack={chooseTrack} />
                })}
            </ul><br/>

            <button onClick={loadMoreSongs} className="load-more-btn">Load More Songs</button>
        </>
    )
}