import {Route, Routes} from 'react-router-dom'
import Catalog from './components/Catalog/Catalog'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product'
import MainLayout from './layouts/MainLayout'

// TODO: change project structure (or not) :)
// TODO: fix console warnings
// TODO: directory for pages
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Catalog/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}
