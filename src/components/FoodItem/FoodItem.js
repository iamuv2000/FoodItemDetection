import React from 'react';

import './FoodItem.css';

const FoodItem = ({item1,item2,item3,item4,item5}) => {
    return(
        <div className='FoodItem'>
            <h3 className=''> Item1: {item1} </h3>
            <h3 className=''> Item2: {item2} </h3>
            <h3 className=''> Item3: {item3} </h3>
            <h3 className=''> Item4: {item4} </h3>
            <h3 className=''> Item5: {item5} </h3>
        </div>
    );
}

export default FoodItem;