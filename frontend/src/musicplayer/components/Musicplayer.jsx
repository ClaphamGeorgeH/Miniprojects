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
                        <h1 class ="text-body-emphasis" id="bandSongName">{musicData.length > 0 ? currentSong.name : <span>Loading...</span>}</h1>
                        <h4 class ="text-dark-emphasis" id="bandName">{musicData.length > 0 ? currentSong.album.band.name : <span>Loading...</span>}</h4>
                        <h6 class ="text-body-secondary" id="bandAlbumName">{musicData.length > 0 ? currentSong.album.name : <span>Loading...</span>}</h6>
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
                ABC
            </div>
        </div>
    </div>
)
}

export default Musicplayer;