import React, { useState } from "react"
import { Paper } from "@mui/material";
import {styled} from "@mui/material";
import MemoryCard from "./components/MemoryCard";
import Form from "./components/Form";
import axios from "axios";
import { CATEGORIES } from "./constants/categories";
import { EMOJIS_BASE_URL } from "./constants/apis";

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
  const [emojisData, setEmojisData] = useState([]);

  async function startGame(event: React.FormEvent){
    event.preventDefault();
    try{
      const response = await axios.get(`${EMOJIS_BASE_URL}${CATEGORIES[1].id}`);
      if(response.status !== 200){
        throw new Error("Unable to fetch data");
      }
     
        const data = response.data as [];
        const dataSample = data.slice(0,5);
        setEmojisData(dataSample);
        setIsGameOn(true);  
        
      
    }catch(err){
      console.error(err);
    }
    
  }

  function turnCard(){
    console.log("Memory card clicked");
  }

  return(
    <MemoryPaperOutline elevation={6}>
      <h1>Memory Card</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </MemoryPaperOutline>
  )
}