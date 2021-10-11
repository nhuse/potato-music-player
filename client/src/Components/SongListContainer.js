import SongRender from './SongRender'
import '../Styling/SongRender.css'

export default function SongListContainer({ songList, chooseTrack }){
    return(
        <>
            <ul className="song-ul">
                {songList.map((song, index) => {
                    if(song.is_local) {
                        return;
                    }else {
                        return <SongRender key={song.track.id} song={song} index={index} chooseTrack={chooseTrack} />
                    }
                })}
            </ul>
        </>
    )
}