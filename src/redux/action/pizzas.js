import axios from 'axios';

 const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

const setPizzas = (items) => ({ 
    type: 'SET_PIZZAS', 
    payload: items,
 })
 
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))

    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=asc`)
    .then( ({data}) => {
     dispatch(setPizzas(data));
    })
}




 export default setPizzas;
