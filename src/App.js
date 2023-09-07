import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Catalog} from './components/Catalog/Catalog'
import {Route, Routes} from 'react-router-dom'
import {NotFound} from './components/NotFound/NotFound'

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/riksha-react" element={<Catalog/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
