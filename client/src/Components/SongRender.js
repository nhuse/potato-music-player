import '../Styling/SongRender.css'

export default function SongRender({ song, chooseTrack, index }) {
    const { track } = song;
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

    function handleClick() {
        chooseTrack(track.uri, song, index)
    }

    track.album.images.length == 0 ? 
    img = 'https://www.pngall.com/wp-content/uploads/2016/04/Compact-Disk-Download-PNG.png' 
    : 
    img = track.album.images[0].url

    return (
        <li className="song-li-container" onClick={handleClick}>
            <div className="album-img">
                <img src={img} className="album-cover" />
            </div>
            <div className="song-info">
                <p className="song-name">{track.name}</p>
                <p className="artist-name">{track.artists[0].name}</p>
            </div>
            <div className="album-name">
                <p className="album-name-p">{track.album.name}</p>
            </div>
            <div className="time">
                <p className="time-p">{msConverter(track.duration_ms)}</p>
            </div>
        </li>
    )
}