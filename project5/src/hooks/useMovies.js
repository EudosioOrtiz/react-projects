import { searchMovies } from '../services/movies'
import { Movies } from '../components/Movies'
import { useState,useRef, useMemo, useCallback } from 'react'

export function useMovies({search, sort}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  /*const getMovies = useMemo(() => {
    return async ({search}) =>{
      if(search === previousSearch.current) return

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  },[]) //con use memo se evitar renderizar cada que cambia algo la funcion y que se ejecute solo cuando quereamos que funcione*/

  const getMovies = useCallback(() => {
     async ({search}) =>{
      if(search === previousSearch.current) return

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  },[]) //use callback es lo mismo que useMemo pero enfocado en funciones

  const sortedMovies = useMemo(()=>{return sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies }, [sort, movies]) // useMemo almacena computaciones y las actualiza cada que cambian las dependecias del array

  

  return {movies: sortedMovies, getMovies, loading}
}