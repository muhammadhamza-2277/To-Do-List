import MenuIcon from '@mui/icons-material/Menu';

import './Components.css'

const Button = (props) => {


    return (
        <button
            className="menu-button"
            onClick={props.onClick}
        >
            <MenuIcon sx={{ color: '#fff' }} />
            {props.children}

        </button>
    )
}

export default Button