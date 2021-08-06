import SongRender from './SongRender'
import '../Styling/SongRender.css'

export default function SongListContainer({ songList, chooseTrack }){
    return(
        <>
            <ul className="song-ul">
                {songList.map(song => {
                    return <SongRender key={song.track.id} song={song} chooseTrack={chooseTrack} />
                })}
            </ul>
        </>
    )
}