import Home from './components/Home'
import Musicplayer from './musicplayer/components/Musicplayer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/musicplayer' element={<Musicplayer/>}/>
        </Routes>
      </Router>  
    </>
    
  )
}

export default App
