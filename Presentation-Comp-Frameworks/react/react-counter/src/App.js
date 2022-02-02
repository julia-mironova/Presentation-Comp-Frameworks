import MainSection from './main/mainSection'
import React, { useState } from 'react';

function App() {
  let [writeNum, setNum] = useState(0);

  function plusBtn() {
    setNum(writeNum+=1);
  }

  function minusBtn() {
    setNum(writeNum-=1);
  }

  return (
    <><header>
      <h1>Counter</h1>
    </header>
    <MainSection num = {writeNum} plusClick = {plusBtn} minusClick = {minusBtn}/>
    <footer>
        <h3>React</h3>
    </footer></>
  )
}

export default App;
