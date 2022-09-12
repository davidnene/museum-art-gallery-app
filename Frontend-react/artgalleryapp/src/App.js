import './App.css';
import {useState, useEffect} from 'react';
import Card from './Card';

function App() {
  const [arts, setArts] = useState([])

  function handleArts() {
    fetch('http://localhost:9292/arts')
    .then(res => res.json())
    .then(data => setArts(data))
  };

  useEffect(handleArts, [])

  return (
  <div className='container'>
    <div className='row'>
      {arts.map(art => (
        <Card key = {art.id} title = {art.title} image = {art.img_url} altText = {art.alt_text} artistTitle = {art.artist_title} dateStart = {art.date_start} dateEnd = {art.date_end} ></Card> ))}
    </div>
  </div>
  )
};

export default App;
