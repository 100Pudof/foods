import React from 'react'


 const Categories = React.memo(function Categories({items, onClick, activeCategory}) {
  

  const changeActive = (index) => {
    onClick(index)
  }
    return (
        <div>
            <div className="categories">
              <ul className="ul">
                <li className={activeCategory == null ? 'active' : ''}
                onClick={() => changeActive(null)}> Все</li>
                {items &&
                  items.map((name, index) => 
                  <li 
                  onClick={() => changeActive(index)} 
                  className={activeCategory === index ? 'active' : ''}
                  key={index}> {name} </li>)
                }
              </ul>
            </div>
        </div>
    )
})
export default Categories;
