import { useState } from "react"
import Body from "./components/Body"
import Header from "./components/Header"
function App() {

  const [isOpen, setIsOpen] = useState(true);

  const toggleBody = () =>{
    console.log('clicked')
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <Header title="HELLO, TASK TRACKER" 
      
      onToggle = {toggleBody}
      />
      <Body 
      isVisible = {isOpen}
      />
    </>
  )
}

export default App
