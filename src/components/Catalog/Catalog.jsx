import {InfoBlock} from './InfoBlock/InfoBlock'
import {Sort} from './Sort/Sort'
import {FoodList} from './FoodList/FoodList'

export function Catalog() {
    return (
        <>
            <Sort/>
            <FoodList/>
            <InfoBlock/>
        </>
    )
}
