import React, {useState} from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import { RedButton, BlueButton, GreenButton } from "./Button.styled";


function App() {
const [buttonClicks, setButtonClicks] = useState([])
console.log(buttonClicks)

  function handleClick(e) {
   setButtonClicks(e.target.value)
  }
  return (
    <>
      <Nav />
      <Hero />
      <RedButton value={1} onClick={handleClick}>
        Click Me
      </RedButton>
      <BlueButton value={2} onClick={handleClick}>
        Click Me
      </BlueButton>
      <GreenButton value={3} onClick={handleClick}>
        Click Me
      </GreenButton>
  <div>Button {buttonClicks} Was Clicked</div>
    </>
  );
}

export default App;
