import { AppBar } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link, useHistory } from 'react-router-dom';
import '../App.css';
import Appbar from '../comp/Appbar';
import Lista from '../comp/Lista';
import AdicionarFilme from '../Telas/AdicionarFilme';

export default function Home() {
  return (
    <div className="App">
      <Appbar/> 
     <h1 className='texto'>
      Bem-vindo ao CineReview! Publique e avalie seus filmes favoritos
     </h1>
     <Lista/>
    </div>
  );
}
