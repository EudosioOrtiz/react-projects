import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'
import { useEffect } from 'react'

//USE REF


function App() {
  const {movies} = useMovies()
  const [query, setQuery] = useState()
  const [error, setError] = useState()

  // no controlada
  const handleSubmit = (event)=>{
    event.preventDefault()
    const query = Object.fromEntries(new window.FormData(event.target))
    console.log(query)
  }
// controlada
  const handleChange = (event)=>{
    setQuery(event.target.value)
  }

  useEffect(()=>{
    if (query ==='') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
  },[query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form action="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' type="text" placeholder='Avengers, Star wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>} 
      </header>

      <main>
          <Movies movies={movies}></Movies>  
      </main>
    </div>
  )
}

export default App
