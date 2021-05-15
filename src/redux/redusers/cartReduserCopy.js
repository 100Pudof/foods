

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}
const getArr = (obj) =>  [].concat.apply([], Object.values(obj));
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_CART': {
            let id = action.payload.id + '_' + action.payload.price;
            let newItems = {
                ...state.items,
                [id]: !state.items[id]  
                ? [action.payload] 
                : [...state.items[id], action.payload],
            };
            let items = getArr(newItems);
            return {
                ...state,
                items: newItems,
                totalPrice: getTotalPrice(items),
                totalCount: items.length
            }
        };

        case 'PLUS_ITEM': {
            const funcPlus = {
                ...state.items,
              };
              funcPlus[action.payload].push(funcPlus[action.payload][0]);
              const arr = getArr(funcPlus);
              console.log(funcPlus[action.payload])
            return {
                ...state,
                items: funcPlus,
                totalPrice: getTotalPrice(arr),
                totalCount: arr.length
            }
        };

        case 'MINUS_ITEM': {
            const oldItems = state.items[action.payload];
            let newObj =  oldItems.length > 1 
            ? oldItems.slice(0, oldItems.length - 1) 
            : oldItems; 
            let minItems = {
                ...state.items,
                [action.payload]: newObj,
            }
             const arr = getArr(minItems);
            return {
                ...state,
                items: minItems,
                totalCount: arr.length,
                totalPrice: getTotalPrice(arr)
            }
        };

        case 'REMOVE_CART_ITEM': {
            let oldItems = {
                ...state.items
            };
                delete oldItems[action.payload]
                const arr = getArr(oldItems)
            return {
                ...state,
                items: oldItems,
                totalPrice: getTotalPrice(arr),
                totalCount: arr.length,
            }
        }

        case 'CLEAR_CART': {
            return {
                ...state,
                items: {},
                totalPrice: null,
                totalCount: null,
            }
        }
        default:
            return state;
    }
}
export default cart;