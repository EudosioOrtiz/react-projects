import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'


function App() {
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
      <CartProvider>
        <Header></Header>
        <Cart></Cart>
        <Products products={filteredProducts}></Products>
        <Footer></Footer>
      </CartProvider>
  )
}

export default App
