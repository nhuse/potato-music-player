import SongRender from './SongRender'
import './SongRender.css'

export default function SongListContainer({ songList, chooseTrack }){
    return(
        <>
            <ul className="song-ul">
                {songList.map(song => {
                    {console.log(song)}
                    return <SongRender key={song.track.id} song={song} chooseTrack={chooseTrack} />
                })}
            </ul>
        </>
    )
}