import { useState } from 'react'
import './Components.css'

const Body = ({ isVisible }) => {

    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAdd = () => {
        setItems([...items, text]);
        setText('');
    }
    return isVisible ? (
        <div className="bodyOfList">
            <form action="">
                <input
                    type="text"
                    placeholder="Enter something..."
                    value={text}
                    onChange={handleChange}
                    className="body-input"
                />
                <input type="button" value="  ADD  " onClick={handleAdd} />

            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}> {item}</li>
                ))}
            </ul>
        </div>
    ) : null
}

export default Body