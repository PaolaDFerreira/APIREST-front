import { BrowserRouter as Router, Route, Routes, Link, useHistory } from 'react-router-dom';
import './App.css';
import AdicionarFilme from './Telas/AdicionarFilme';
import Home from './Telas/Home';
import EditarFilme from './Telas/EditarFilme';
import Avaliarfilme from './Telas/avaliarfilme';


function App() {
  return (
    <div className="App">
      <Router>   
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/editFilme/:id" element={<EditarFilme/>}/>
        <Route exact path="/editFilmeReview/:id" element={<Avaliarfilme/>}/>
        <Route exact path="/addfilme" element={<AdicionarFilme/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
