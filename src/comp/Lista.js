import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './Lista.css';
import axios from 'axios';
import {Link, useParams} from "react-router-dom";

const paperStyle = {
    padding: 20,
    height: '50vh',
    width: 300,
    margin: '20px auto',
  };



export default function Livro() {

    const [nome,setNome]=useState('')
    const [diretor,setDiretor]=useState('')
    const [ano,setAno]=useState('')
    const [livros,setLivros]=useState([]);

    const {id} = useParams()

    useEffect(()=>{
        fetch("http://localhost:8080/livro/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setLivros(result);
        }
    )
    },[])

    const deletarFilme = async(livroId) => {
      try {
        const response = await axios.delete(`http://localhost:8080/livro/filme/${livroId}`);
        console.log(response.data);
        window.location.reload();
    } catch (error) {
        console.error('Erro para deletar:', error);
    }
  }

  return (
    <Container>
      <Grid container spacing={2} className='lista-container'>
        {livros.map((livro) => (
          <Grid item xs={2}  lg={4} key={livro.id}>
            <Paper elevation={3} style={paperStyle} className='lista-paper'>
              <div className="detalhesfilme">
                <strong>Nome:</strong> {livro.nome}
              </div>
              <div className="detalhesfilme">
                <strong>Ano:</strong> {livro.ano}
              </div>
              <div className="detalhesfilme">
                <strong>Diretor:</strong> {livro.diretor}
              </div>

              {livro.avaliacao === null ? (
                <div className="detalhesfilme">
                  <strong>Avaliação:</strong> Este filme ainda não foi avaliado!
                </div>
              ) : (
                <div className="detalhesfilme">
                  <strong>Avaliação:</strong> {livro.avaliacao}
                </div>
              )}

              <div className='botoes-container'>
              <Link className='avaliarfilme' onClick={() => deletarFilme(livro.id)}>
              <span>Deletar</span>
              </Link>
              <Link className='avaliarfilme' to={`/editFilmeReview/${livro.id}`}>
                <span>Avaliar Filme</span></Link>
              <Link className='avaliarfilme'
              to={`/editFilme/${livro.id}`}
              ><span>Editar</span></Link>
              </div>
                </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}