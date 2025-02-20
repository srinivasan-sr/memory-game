import React, { useState } from "react"
import { Paper } from "@mui/material";
import {styled} from "@mui/material";
import MemoryCard from "./components/MemoryCard";
import Form from "./components/Form";

const MemoryPaperOutline = styled(Paper)(({theme}) => ({
  width: '60%',
  height: '80vh',
  margin: 'auto',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.typography.body2,
}));

export default function App(){
  const [isGameOn, setIsGameOn] = useState(false);

  function startGame(event: React.FormEvent){
    event.preventDefault();
    setIsGameOn(true);  
  }

  function turnCard(){
    console.log("Memory card clicked");
  }

  return(
    <MemoryPaperOutline elevation={6}>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} />}
    </MemoryPaperOutline>
  )
}