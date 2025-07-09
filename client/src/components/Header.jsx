import Button from './Button'
import './Components.css'



const Header = (props) => {

    return (
        <>
            <header>
                <Button
                    onClick={props.onToggle}
                ></Button>
                <h1>{props.title}</h1>
            </header>
        </>
    )

}

export default Header