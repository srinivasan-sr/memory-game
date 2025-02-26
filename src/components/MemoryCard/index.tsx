import { Button, Grid2 } from "@mui/material";
import {parseStringToHtml} from '../../utils/appUtils';
import {EmojiItemProps} from '../../types/emoji-types';

type MemoryCardProps = {
    handleClick: (index: number, name: string) => void,
    data: EmojiItemProps[],
};

export default function MemoryCard({handleClick, data}:MemoryCardProps){

    const emojiButtonElements = data.map((emoji, index) => 
        <Grid2 size={2} key={index} aria-label="Emoji button grid">
        <Button key={index} variant="outlined" 
        onClick={() => handleClick(index,emoji.name)} size="large" aria-label="Emoji element button"
        sx={{fontSize: '2rem'}}
        >
            {parseStringToHtml(emoji.htmlCode[0].toString())}
        </Button>
        </Grid2>
    )
    return <Grid2 container spacing={3}>
        {emojiButtonElements}
    </Grid2>
}