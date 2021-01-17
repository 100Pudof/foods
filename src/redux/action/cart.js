export const addToCart = (obj) => ({
    type: 'ADD_ITEM_CART',
    payload: obj,
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
})

export const plusItem = (id) => ({
    type: 'PLUS_ITEM',
    payload: id,
})

export const minusItem = (id) => ({
    type: 'MINUS_ITEM',
    payload: id,
})