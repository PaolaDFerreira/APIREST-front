import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Appbar from '../comp/Appbar';
import '../comp/Lista.css';
import { Link } from 'react-router-dom';

const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 300,
    margin: '20px auto',
  };

  const textStyle = {
    color: "#16063a",
  };

export default function DeletarFilme() {

    const [nome,setNome]=useState('')
    const [diretor,setDiretor]=useState('')
    const [ano,setAno]=useState('')
    const [livros,setLivros]=useState([])


    const clicar=(e)=>{
        e.preventDefault()
        const livro  = {nome,diretor,ano}
        console.log(livro)
        fetch("http://localhost:8080/livro/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(livro)
        }).then(()=>{
            console.log("Você adicionou um livro")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/livro/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setLivros(result);
        }
    )
    },[])

  return (
    <Container>
    <Appbar/> 
    <Paper eleveation={4} style={paperStyle} >
       <h1 style={textStyle}>
        Adicione um filme
       </h1>
    <Stack spacing={2} className='paperBarAdd'>

      <TextField label="Nome_filme" variant="outlined"
      value={nome}
      onChange={(e)=>setNome(e.target.value)}

      />
      <TextField label="Diretor" variant="outlined"
       value={diretor}
       onChange={(e)=>setDiretor(e.target.value)}
       />
      <TextField label="Ano" variant="outlined"
       value={ano}
       onChange={(e)=>setAno(e.target.value)}
      />
    
    <button className="avaliarfilme" variant="contained" color="secondary" onClick={clicar}>
    <Link to="/" className='avaliarfilme' >Enviar</Link>
    </button>
    </Stack>
    </Paper>


    </Container>
  );
}