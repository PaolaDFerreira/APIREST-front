import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Appbar from '../comp/Appbar';
import '../comp/Lista.css';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 300,
    margin: '20px auto',
  };

  const textStyle = {
    color: "#16063a",
  };

export default function AvaliarFilme() {

    const{id}=useParams()
    const[filme, setFilme]= useState({
        avaliacao:"",
    });
    const{avaliacao} = filme;
    let navigate = useNavigate();

    const onInputChange = (e) => {
        setFilme({...filme,[e.target.name]: e.target.value});
    };

    const clicar = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/livro/editFilmeReview/${id}`,filme);
        navigate("/");
    }

    useEffect(()=>{
        carregarFilme();
    },[]);

    const carregarFilme = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/livro/${id}`);
        } catch (error) {
            console.error('Erro:', error);
        }
    };


    return (
        <Container>
        <Appbar/> 
        <Paper eleveation={4} style={paperStyle} >
           <h1 style={textStyle}>
            Edite a review do filme escolhido:
           </h1>
        <Stack spacing={2} className='paperBarAdd'>
    
          <TextField label="Nome_filme" variant="outlined"
          name = "avaliacao"
          value={avaliacao}
          onChange={(e)=>onInputChange(e)}
          />
        
        <button className="avaliarfilme" variant="contained" color="secondary" onClick={clicar}>
        <Link to="/" className='avaliarfilme' >Alterar</Link>
        </button>
        </Stack>
        </Paper>
    
    
        </Container>
    );
  }