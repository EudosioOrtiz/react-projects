import { useState } from "react";
import { createContext } from "react"; //useContext nos permite dan informacion a componentes sin hacer prop drilling, y hacer inyeccion de dependencias
// y se usa para cambios no frecuentes
// creamos el contexto a consumir
export const FiltersContext = createContext()

// Este es el que nos provee de acceso al contexto
export function FiltersProvider({children}) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0 
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}

// pasos usar el useContect, 1 crearlo, 2 proveerlo, 3 consumirlo