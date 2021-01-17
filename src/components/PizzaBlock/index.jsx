
import React from 'react'
import classNames from 'classnames';
import Button from './../Button';

function PizzaBlock({ id, name, imageUrl, types, sizes, price, onClickAddPizza, categoryTypes, addedCount }) {
    const [activeType, setActiveType] = React.useState(types[0]); // указываем (types[0]) что-бы выделялся оставшийся type, если второго нет.
    const [activePrice, setActivePrice] = React.useState(0);

    
    const onSelectType = (index) => {
        setActiveType(index);
        setActivePrice(index);
    }
    const addPizzaToCart = () => {
        const obj = {
            id,
            price: price[activePrice],
            name,
            imageUrl,
            // size: availableSize[activeSize],
             type: categoryTypes[activeType],
        };
        onClickAddPizza(obj);
        
        
    }
    // const [activeSize, setActiveSize] = React.useState(0);
    // const availableSize = [26, 30, 40];
    // const onSelectsize = (index) => {
    //     setActiveSize(index);
    // }
    // if(!sizes.includes(categoryTypes)) {
    //     setActiveSize(activeSize + 1)
    // }
    return (
        <div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {categoryTypes.map((type, index) => (
                            <li
                                onClick={() => onSelectType(index)}
                                key={index}
                                className={classNames({
                                    'active': activeType === type,
                                    'disable': !types.includes(type),
                                })}>
                                {type}
                            </li>
                        ))
                        }
                    </ul>
                    <ul>
                        {/* {availableSize.map((size, index) => (
                            <li
                                onClick={() => onSelectsize(index)}
                                key={index}
                                className={classNames({
                                    'active': activeSize === index,
                                    'disable': !sizes.includes(size),
                                })}>
                                {size} см.
                            </li>
                        ))
                        } */}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price"> {price[activePrice]} ₽</div>
                    <Button onClick={addPizzaToCart} className='button--add' outline >
                        <svg
                            onClick={() => onClickAddPizza()}
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCount && <i>{addedCount}</i>}
                    </Button>
                </div>
            </div>
        </div>
    )
}



export default PizzaBlock
