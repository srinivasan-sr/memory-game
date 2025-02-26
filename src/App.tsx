import React, { useState } from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material";
import MemoryCard from "./components/MemoryCard";
import Form from "./components/Form";
import axios from "axios";
import { CATEGORIES, DIFFICULTY_LEVEL_INDEX } from "./constants/app-constants";
import { EMOJIS_BASE_URL } from "./constants/apis";
import { getEmojisFromList, duplicateEmojisAndShuffle } from './utils/appUtils';
import { EmojiItemProps } from './types/emoji-types';

const MemoryPaperOutline = styled(Paper)(({ theme }) => ({
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

type SelectedCardProps = {
  index: number,
  name: string,
};

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState<EmojiItemProps[] | []>([]);
  const [selectedCards, setSelectedCards] = useState<SelectedCardProps[] | []>([]);

  console.log(selectedCards);
  async function startGame(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await axios.get(`${EMOJIS_BASE_URL}${CATEGORIES[1].id}`);
      if (response.status !== 200) {
        throw new Error("Unable to fetch data");
      }

      const data = response.data as EmojiItemProps[];

      const filteredEmojisList = getEmojisFromList({ data: data, difficultyLevelIndice: DIFFICULTY_LEVEL_INDEX.EASY });
      const shuffledEmojisArray = duplicateEmojisAndShuffle(filteredEmojisList);
      setEmojisData(shuffledEmojisArray);
      setIsGameOn(true);


    } catch (err) {
      console.error(err);
    }

  }

  function turnCard(index: number, name: string) {
    const selectedCard = [{index, name}, ...selectedCards];
    setSelectedCards(selectedCard);
  }

  return (
    <MemoryPaperOutline elevation={6}>
      <h1>Memory Card</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </MemoryPaperOutline>
  )
}