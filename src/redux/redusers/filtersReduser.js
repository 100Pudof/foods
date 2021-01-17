const initialState = {
    sortBy: {
        type: 'price',
        order: 'desc',
    },
    size: null,
    category: null,
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
            case 'SET_CATEGORY':
                return {
                    ...state,
                    category: action.payload
                }
            case 'SET_SIZE':
                return {
                    ...state,
                    size: action.payload
                }
    }
    return state;
}
export default filters;