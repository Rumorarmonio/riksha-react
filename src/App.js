import {Route, Routes} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Catalog from './components/Catalog/Catalog'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart'
import Details from './components/Details/Details'

// TODO: change project structure (or not) :)
// TODO: fix console warnings
function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Catalog/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
