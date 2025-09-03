import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
export function Footer() {
    const {filters} = useFilters()
    const {cart} = useCart()
    return(
    <footer className='footer'>
        <h3>{JSON.stringify(filters)}</h3>
        <h3>{JSON.stringify(cart)}</h3>
        <h4>Prueba técnica de React ⚛️ － <span>@eudOrtiz</span></h4>
        <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>)
}