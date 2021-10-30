import Item from "./components/item"
import Card from "./components/card"

const App = () => {
  return(
    <>
      <h1>Helo world</h1>
      <ul>
        <Item texto='texto muito louco de se ler' />
        <Item texto='texto muito louco de se ler 2' />
        <Item texto='texto muito louco de se ler 3' />
      </ul>
      <Card/>
    </>
  )
}

export default App