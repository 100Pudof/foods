import React from 'react'
import { Categories, Sort, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/action/filters';
import { fetchAllItems } from '../redux/action/pizzas';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';
import { setSortBy } from './../redux/action/filters';
import { addToCart } from './../redux/action/cart';


const sortItems = [
  { name: 'цена', type: 'price', order: 'desc' },
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' }
];

const  Home = React.memo(() => {
  // const {items} = useSelector( ({cart}) => { // вытащить из useSelector только {items}
  // return {
  //   items: cart.items,
  // };
  // альтернативный вариант const items = useSelector( ({cart}) =>  cart.items);

  const dispatch = useDispatch();
  const categoryName = useSelector(({ category }) => category.categoryName)
  const items = useSelector(({ items }) => items.items)
  const isLoaded = useSelector(({ items }) => items.isLoaded)
  const category = useSelector(({ filters }) => filters.category);
  const sortBy = useSelector(({ filters }) => filters.sortBy)
 
  const setCategoryIndex = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  const handleAddToCart = React.useCallback((obj) => {
    dispatch(addToCart(obj));
  }, [dispatch]);

 React.useEffect(() => {
    dispatch(fetchAllItems(sortBy, category));
  }, [sortBy, category, dispatch]);

  
  return (

      <div className="container">
        <div className="content__top">
          <Categories 
          items={categoryName} 
          activeCategory={category} 
          onClick={setCategoryIndex}
          />
          <Sort
            items={sortItems}
            activeSortType={sortBy.type}
            onClickSortType={onSelectSortType}
             />
        </div>
        <h2 className="content__title">{category != null ? categoryName[category] : 'Все'}</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((elem) => (
              <PizzaBlock
                onClickAdd={handleAddToCart}
                key={elem.id}
                {...elem}
                categoryTypes={elem.types}
                //addedCount={cartItems[elem.id] && cartItems[elem.id].items.length}
              />))
            : Array(4).fill(0).map((_, index) => <LoadingBlock key={index} />)
          }
  

        </div>
      </div>
  )
}
);

export default Home
