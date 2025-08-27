import { useState, useEffect} from 'react'
import './App.css'

const CAT_ENTPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENTPOINT_IMAGE_URL = `https://catass.com/cat/says/${firstWord}?size=50&color=red&json=true`

function App() {
  const [fact, setFact] = useState(null)
  const [imageURL, setImageURL] = useState(null)

  useEffect(()=>{
    fetch(CAT_ENTPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)
    })
  },[])


  useEffect(()=>{
    if (!fact) return
    
    const firstWord = fact.split(' ', 3).join(' ')
    console.log(firstWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
    .then(res => res.json())
    .then( response => {
      const {url} = response
      setImageURL(`${url}`)
    })
  },[fact])

  return (
    <main>
      <h1>App Cat</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Image extracted using the first three words for ${fact}`}/>}
    </main>
  )
}

export default App
