import {Header} from './components/Header/Header'
import {Sort} from './components/Sort/Sort'
import {FoodList} from './components/FoodList/FoodList'
import {InfoBlock} from './components/InfoBlock/InfoBlock'
import {Footer} from './components/Footer/Footer'

function App() {
    return (
        <div className="App">
            <Header/>
            <Sort/>
            <FoodList/>
            <InfoBlock/>
            <Footer/>
        </div>
    )
}

export default App
