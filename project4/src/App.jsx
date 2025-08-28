import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact.js'
import { Otro } from './components/Otro.jsx'

// utlizar y modulizar los hooks en custom hooks para legibilidad
function App() {
  const { fact, refreshFact } = useCatFact()
  const {imageURL} = useCatImage({ fact })
 
  const handleClick = async ()=>{
    refreshFact()
  }

  return (
    <main>
      <h1>App Cat</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Image extracted using the first three words for ${fact}`}/>}
    </main>
  )
}

export default App
