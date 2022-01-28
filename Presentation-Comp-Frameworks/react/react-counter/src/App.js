import MainSection from './main/mainSection'

function App() {
  let writeNum = 0;
  return (
    <><header>
      <h1>Counter</h1>
    </header>
    <MainSection num = {writeNum}/>
    <footer>
        <h3>React</h3>
    </footer></>
  )
}

export default App;
