import { useState, useEffect} from 'react'
import { getRandomFact } from '../services/facts.js'

//los nombres de los hooks no tienen que tener descripcion de funcionalidad
// dejar la actualizacion del estado dentro del custom hook

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact = ()=>{
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshFact,[])

    return {fact, refreshFact}
}