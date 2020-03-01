import { ADD_SINGLE_ITEM_TO_CART, ADDING_SINGLE_ITEMS_TO_CART, ADD_SINGLE_ITEMS_TO_FAILED, CHANGE_CART_ITEM_QTY_FAILED, CHANGE_CART_ITEM_QTY_SUCCESSFULLY, CHANGING_CART_ITEM_QTY } from "../../constants";


const calculateCartTotalQty = (items) => {
    if (items.length === 0) return 0;
    if (items.length === 1) return items[0].qty;
    let totalQty = 0;
    for (let item of items) {
        totalQty += item.qty;
    }
    return totalQty;
}

const calculateCartSubTotal = (items) => {
    if (items.length === 0) return 0;
    if (items.length === 1) return items[0].qty * items[0].basePrice;
    let subTotal = 0;
    for (let item of items) {
        subTotal += item.basePrice * item.qty;
    }
    return subTotal;
}

const bsCartJSON = localStorage.getItem('bs_cart');
let cartItems = [];
try {
    cartItems = JSON.parse(bsCartJSON);
    if (!Array.isArray(cartItems)){
        cartItems = [];
    }
}catch{
    cartItems =[];
}

const initialState = {
    items: cartItems,
    adding: false,
    cartTotalQty: calculateCartTotalQty(cartItems),
    cartSubTotal: calculateCartSubTotal(cartItems)
}

export default function cartReducer(state = initialState, action) {
    const items = [...state.items];
    let itemExisted = null;
    switch (action.type) {
        case ADDING_SINGLE_ITEMS_TO_CART:
        case CHANGING_CART_ITEM_QTY:
            return {
                ...state,
                adding: true
            }
        case ADD_SINGLE_ITEM_TO_CART:
            itemExisted = items.find(item => item.id === action.item.id);
            if (itemExisted) {
                itemExisted.qty = itemExisted.qty + parseInt(action.qty)
            } else {
                items.push({ ...action.item, qty: action.qty });
            }
            localStorage.setItem('bs_cart',JSON.stringify(items));
            return {
                ...state,
                cartTotalQty: calculateCartTotalQty(items),
                cartSubTotal: calculateCartSubTotal(items),
                items,
                adding: false
            }
        case CHANGE_CART_ITEM_QTY_SUCCESSFULLY:
            itemExisted = items.find(item => item.id === action.item.id);
            if (itemExisted) {
                itemExisted.qty = parseInt(action.qty)
            } 
            localStorage.setItem('bs_cart',JSON.stringify(items));
            return {
                ...state,
                adding: false,
                cartTotalQty: calculateCartTotalQty(items),
                cartSubTotal: calculateCartSubTotal(items),
                items,
            }
        case CHANGE_CART_ITEM_QTY_FAILED:
        case ADD_SINGLE_ITEMS_TO_FAILED:
            return {
                ...state,
                adding: false
            }
        default: return state;
    }
}