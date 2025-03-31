import {Route, Routes} from 'react-router-dom'
import {ReactElement} from 'react'
import {ProductPage} from './components/ProductPage/ProductPage'
import {MainLayout} from './layouts/MainLayout'
import {Catalog} from './components/Catalog/Catalog'
import {Cart} from './components/Cart/Cart'
import {NotFound} from './components/NotFound/NotFound'

// TODO: change project structure (or not) :)
// TODO: fix console warnings
// TODO: directory for pages
export function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Catalog/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}
