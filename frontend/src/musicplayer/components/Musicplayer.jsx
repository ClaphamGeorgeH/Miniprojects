import { useEffect, useState } from 'react';
import img from '../../assets/react.svg'
import './css/Musicplayer.css'


function Musicplayer(){

const [musicData, setMusicData] = useState([]);
const [currentSong, setCurrentSong] = useState(null);


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



return(
    <div className="container" id='MusicPlayerContainer'>
        <div className="row">
            <div className="col" id="MusiplayerTitleColumn">
                <h1>Music player</h1>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col-3" id="bandImageColumn">
                <img src={`http://localhost:8080/${musicData.length > 0 ? currentSong.album.band.imageLocation : img}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className="col-6" id="bandInfoColumn">
                        <h1 id="bandSongName">{musicData.length > 0 ? currentSong.name : <span>Loading...</span>}</h1>
                        <h4 id="bandName">{musicData.length > 0 ? currentSong.album.band.name : <span>Loading...</span>}</h4>
                        <h6 id="bandAlbumName">{musicData.length > 0 ? currentSong.album.name : <span>Loading...</span>}</h6>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-3 text-end' id="songTimeColumn">
                00:00
            </div>
            <div className='col-6 text-center' id="songProgressBarColumn">
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>75%</div>
                </div>
            </div>
            <div className='col-3 text-start' id="songTimeLeftColumn">
                00:00
            </div>
        </div>
        <div className='row'>
            <div className='col text-center'>
                ABC
            </div>
        </div>
    </div>
)
}

export default Musicplayer;