import React from 'react';
import classNames from 'classnames';

export default function Button({ className, outline, children, onClick }) { // вариант с деструктуризацией пропсов. вместо {props}


    return (
        <button onClick={onClick} className={classNames(
            'button', className, // автоматом добавляется класс button, className
            {
                'button--outline': outline // если props.outline = true, добавляется класс button--outline.
            }
        )}>
            {children}
        </button>
    )
}