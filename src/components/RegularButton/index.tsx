import { Button } from "@mui/material"
type RegularButtonProps = {
    handleClick: (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children: any,
}

export default function RegularButton({handleClick, children}:RegularButtonProps){
    return <Button variant="contained" onClick={handleClick}>{children}</Button>
}