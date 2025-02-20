import { Button, Grid2 } from "@mui/material";
type MemoryCardProps = {
    handleClick: (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export default function MemoryCard({handleClick}:MemoryCardProps){
    const emojiArray = ['🐱', '🐿', '🐶', '🦚', '🐠', '🦏', '🦚', '🐶', '🐠', '🦏','🐱', '🐿'];

    const emojiButtonElements = emojiArray.map((emoji, index) => 
        <Grid2 size={2} key={index} aria-label="Emoji button grid">
        <Button key={index} variant="outlined" 
        onClick={handleClick} size="large" aria-label="Emoji element button"
        sx={{fontSize: '2rem'}}
        >
            {emoji}
        </Button>
        </Grid2>
    )
    return <Grid2 container spacing={3}>
        {emojiButtonElements}
    </Grid2>
}