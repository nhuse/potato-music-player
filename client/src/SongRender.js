import './SongRender.css'

export default function SongRender({ song, chooseTrack }) {
    const { track } = song;
    console.log(song)
    let img = ''

    function msConverter(time) {
        var minutes = Math.floor(time / 60000);
        var seconds = ((time % 60000) / 1000).toFixed(0);
        return (
            seconds == 60 ?
            (minutes+1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
        );
    }

    track.album.images.length == 0 ? 
    img = 'https://www.pngall.com/wp-content/uploads/2016/04/Compact-Disk-Download-PNG.png' 
    : 
    img = track.album.images[0].url

    return (
        <li className="song-li-container" onClick={() => chooseTrack(track.uri)}>
            <img src={img} className="album-cover" />
            <div>
                <div>
                    <p className="song-name">{track.name}</p>
                </div>
                <div>
                    <p className="artist-name">{track.artist.name}</p>
                </div>
            </div>
            <div>
                <p>{msConverter(track.duration_ms)}</p>
            </div>
        </li>
    )
}