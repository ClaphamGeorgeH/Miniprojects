import { useEffect, useState, useRef } from 'react';
import img from '../../assets/react.svg'
import './css/Musicplayer.css'


function Musicplayer(){

const [musicData, setMusicData] = useState([]);
const [currentSong, setCurrentSong] = useState(null);

const audioRef = useRef(null)


useEffect(() => {
    fetch('http://localhost:8080/api/musicplayer/')
  .then(response => {  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    setMusicData(data);
    setCurrentSong(data[0]); // Set the first song as the current song
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation (e.g., network issues)
    console.error('Error fetching data:', error);
  });
}, []);

const handlePlay = () => {
    audioRef.current.play();
}

const handlePause = () => {
    audioRef.current.pause();
}

const handleNext = () => {
    setCurrentSong(musicData[(musicData.indexOf(currentSong) + 1) % musicData.length]);
    audioRef.current.load();
    audioRef.current.play();
}

const handlePrev = () => {
    setCurrentSong(musicData[(musicData.indexOf(currentSong) - 1 + musicData.length) % musicData.length]);
    audioRef.current.load();
    audioRef.current.play();
}


return(
    <>
        <audio ref={audioRef}>
            {currentSong && (
                <source src={`http://localhost:8080/${currentSong.fileLocation}`} type="audio/mpeg" />
            )}
        </audio>
            <div className="container" id='MusicPlayerContainer' style={{ maxWidth: '600px'}}>
            <div className="row">
                <div className="col-8" id="MusiplayerTitleColumn">
                    <h1>Music player</h1>
                </div>
            </div>
    
            <div className="row justify-content-center">
                <div className="col-12 col-md-6" id="bandImageColumn">
                    <img src={`http://localhost:8080/${musicData.length > 0 ? currentSong.album.band.imageLocation : img}`} alt="" style={{ maxWidth: '250px', height: 'auto', objectFit: 'contain' }} />
                </div>
                <div className="col-12 col-md-6" id="bandInfoColumn">
                            <h1 className ="text-body-emphasis" id="bandSongName">{musicData.length > 0 ? currentSong.name : <span>Loading...</span>}</h1>
                            <h4 className ="text-dark-emphasis" id="bandName">{musicData.length > 0 ? currentSong.album.band.name : <span>Loading...</span>}</h4>
                            <h6 className ="text-body-secondary" id="bandAlbumName">{musicData.length > 0 ? currentSong.album.name : <span>Loading...</span>}</h6>
                </div>
            </div>
            <br />
            <div className='row justify-content-center'>
                <div className='col-2 text-end' id="songTimeColumn">
                    00:00
                </div>
                <div className='col-8 text-center' id="songProgressBarColumn">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>75%</div>
                    </div>
                </div>
                <div className='col-2 text-start' id="songTimeLeftColumn">
                    00:00
                </div>
            </div>

            <div className='row'>
                <div className='col text-center'>
                    <button onClick={handlePrev} disabled={musicData.length === 0}>PREV</button>
                    <button onClick={handlePlay} disabled={!currentSong}>PLAY</button>
                    <button onClick={handlePause}>PAUSE</button>
                    <button onClick={handleNext} disabled={musicData.length === 0}>NEXT</button>
                </div>
            </div>
        </div>
    </>
)
}

export default Musicplayer;