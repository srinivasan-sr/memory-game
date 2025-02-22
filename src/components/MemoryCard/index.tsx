import { Button, Grid2 } from "@mui/material";
import {parseStringToHtml} from '../../utils/htmlUtilities';
type EmojiItemProps = {
        "name": string,
        "category"?: string,
        "group"?: string,
        "htmlCode": string[],
        "unicode"?: []
};

type MemoryCardProps = {
    handleClick: (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    data: EmojiItemProps[],
};

export default function MemoryCard({handleClick, data}:MemoryCardProps){

    const emojiButtonElements = data.map((emoji, index) => 
        <Grid2 size={2} key={index} aria-label="Emoji button grid">
        <Button key={index} variant="outlined" 
        onClick={handleClick} size="large" aria-label="Emoji element button"
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