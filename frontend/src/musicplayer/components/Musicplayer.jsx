import { useEffect } from 'react';
import img from '../../assets/react.svg'
import './css/Musicplayer.css'


function Musicplayer(){

useEffect(() => {
    fetch('http://localhost:8080/api/musicplayer/')
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  })
  .then(data => {
    // Handle the fetched data
    console.log(data);
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
                <img src={img} alt="" />
            </div>
            <div className="col-6" id="bandInfoColumn">
                <h1 id="bandSongName">tittle</h1>
                <h4 id="bandName">Band</h4>
                <h6 id="bandAlbumName">Album</h6>
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