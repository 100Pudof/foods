import React from 'react'
import { Categories, Sort, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/action/filters';
import { fetchPizzas } from '../redux/action/pizzas';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';
import { setSortBy, setSize } from './../redux/action/filters';


// import Test from './test'


const sortItems = [
  { name: 'цена', type: 'price', order: 'desc' },
  { name: 'популярности', type: 'pupular', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' }
];

function Home() {
  // const {items} = useSelector( ({pizzas}) => { // вытащить из useSelector только {items}
  // return {
  //   items: pizzas.items,
  // };
  // альтернативный вариант const items = useSelector( ({pizzas}) =>  pizzas.items);
  // const cartItems = useSelector(({ cart }) => cart.items)
  const dispatch = useDispatch();
  const categoryName = useSelector(({ category }) => category.categoryName)
  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const category = useSelector(({ filters }) => filters.category);
  const sortBy = useSelector(({ filters }) => filters.sortBy)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [sortBy, category, dispatch])

  const setCategoryIndex = (index) => {
    dispatch(setCategory(index));
  };

  const onSelectSortType = (type) => {
    dispatch(setSortBy(type));
    dispatch(setSize(type))
  };
  const onSelectSize = (size) => {
    dispatch(setSize(size))
  };
  const handleAddPizzaToCart = (pizzaObj) => {
    dispatch(({
      type: 'ADD_PIZZA_CART',
      payload: pizzaObj
    }))
  }

  return (
    <div>

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
            onClickSize={onSelectSize} />
        </div>
        <h2 className="content__title">{category != null ? categoryName[category] : 'Все'}</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((elem) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={elem.id}
                {...elem}
                categoryTypes={elem.types}
                // addedCount={cartItems[elem.id] && cartItems[elem.id].items.length}
              />))
            : Array(4).fill(0).map((_, index) => <LoadingBlock key={index} />)
          }


        </div>
      </div>
    </div>
  )
}

export default Home
