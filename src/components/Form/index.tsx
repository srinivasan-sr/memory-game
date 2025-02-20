import RegularButton from "../RegularButton"

type FormProps = {
    handleSubmit: (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export default function Form({handleSubmit}: FormProps){
    return <form>
            <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
    </form>
}
