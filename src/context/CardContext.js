import React, { useReducer } from 'react';


const initialstate = {
    selectedItems = [],
    itemsCounter = 0,
    total = 0,
    checkout = false
}

const cardReducer = (state , action) => {

}


const CardContext = () => {

    const [state , dispatch] = useReducer(cardReducer , initialstate);

    return ();
 }
  
 export default CardContext;