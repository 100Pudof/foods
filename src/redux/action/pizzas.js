import axios from "axios";
 const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

const setPizzas = (items) => ({ 
    type: 'SET_PIZZAS', 
    payload: items,
 })
 
export const fetchAllItems = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))

    axios.get(`/all?${category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=asc`)
    .then( ({data}) => {
     dispatch(setPizzas(data));
    })
    
}

// ?`category=2``&_sort=price``&_order=asc`


 export default setPizzas;







//  import React from 'react'
//  import axios from 'axios';
//  import {Redirect} from "react-router-dom";

//  export default function authenticate() {

//     const userName = React.useRef();
//     const password = React.useRef();

//      const authenticateUser = () => {
//          axios.get('https://example.com/api/user/authenticate?username='`${userName.current.value}``${password.current.value}`)
//     .then((response) => {
//         response.status === 200 
//         ? <Redirect to={"/home"} /> 
//         : 'err'; 
//     });
//      };
//      return (
//          <div>
//              <form>
//                  <input ref={userName} type="text"> login </input>
//                  <input ref={password} type="password"> password </input>
//                  <button onClick={authenticateUser} type="submit"> send </button>
//              </form>
//          </div>
//      )
//  }
 
