import { ADD_SINGLE_ITEM_TO_CART } from "../../constants"

export const addSingleItemToCart = (item,qty)=>{
    return {
        type: ADD_SINGLE_ITEM_TO_CART,
        item,
        qty
    }
}