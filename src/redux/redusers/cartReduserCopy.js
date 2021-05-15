

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}
const getArr = (obj) => {
    return [].concat.apply([], Object.values(obj));
}
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_CART': {
            let id = action.payload.id + '_' + action.payload.price;
            const newItems = {
                ...state.items,
                [id]: !state.items[id]  
                ? [action.payload] 
                : [...state.items[id], action.payload],
            };

            const items = getArr(newItems);
            const allPizzasTotalPrice = getTotalPrice(items);
            return {
                ...state,
                items: newItems,
                totalPrice: allPizzasTotalPrice,
                totalCount: items.length
            }
        };

        case 'PLUS_ITEM': {
            const funcPlus = {
                ...state.items,
              };
              funcPlus[action.payload].push(funcPlus[action.payload][0]);
              const arr = getArr(funcPlus);
            return {
                ...state,
                items: funcPlus,
                totalPrice: getTotalPrice(arr),
                totalCount: arr.length
            }
        };

        case 'MINUS_ITEM': {
            const oldItems = state.items[action.payload];
            const newObj =  oldItems.length > 1 
            ? oldItems.slice(0, oldItems.length - 1) 
            : oldItems; 
            const newItems = {
                ...state.items,
                [action.payload]: newObj,
            }
            
             const arr = getArr(newItems);
            return {
                ...state,
                items: newItems,
                totalCount: arr.length,
                totalPrice: getTotalPrice(arr)

            }
        };

        case 'REMOVE_CART_ITEM': {
            let newItems = {
                ...state.items
            };
                delete newItems[action.payload]
                let arr = getArr(newItems)
            return {
                ...state,
                items: newItems,
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

// produce(initialState, draft => {
        //     draft.items += Object.assign( {}, action.payload);
        //     draft.totalPrice += action.payload.price;
        //     draft.totalCount = draft.items.length;

        //     // const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)
        //     // oldPrice.reduce((sum, obj) => action.payload.price + sum, 0);
        // })


export default cart;