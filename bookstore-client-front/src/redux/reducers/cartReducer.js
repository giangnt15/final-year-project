import { ADD_SINGLE_ITEM_TO_CART } from "../../constants";

const initialState = {
    items: [],
    cartTotalQty: 0,
    cartSubTotal: 0
}

const calculateCartTotalQty = (items)=>{
    if (items.length===0) return 0;
    if (items.length===1) return items[0].qty;
    return items.reduce((c,n)=> c.qty+n.qty);
}

const calculateCartSubTotal= (items)=>{
    if (items.length===0) return 0;
    if (items.length===1) return items[0].qty * items[0].basePrice ;
    return items.reduce((c,n)=> c.qty*c.basePrice+n.qty*n.basePrice);
}

export default function cartReducer(state=initialState,action){
    const items = [...state.items]; 
    switch(action.type){
        case ADD_SINGLE_ITEM_TO_CART:
            const itemExisted = items.find(item=>item.id===action.item.id);
            if (itemExisted){
                itemExisted.qty = itemExisted.qty + parseInt(action.qty)
            }else{
                items.push({...action.item, qty: action.qty});
            }
            return {
                ...state,
                cartTotalQty: calculateCartTotalQty(items),
                cartSubTotal: calculateCartSubTotal(items),
                items
            }
        default: return state;
    }
}