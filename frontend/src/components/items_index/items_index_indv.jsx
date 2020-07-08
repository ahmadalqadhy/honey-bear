import React from 'react';

const ItemIndexIndv = ({ item }) => {
    let updatedPrice = (Math.round(item.rate * 100) / 100);
    // let formattedPrice = updatedPrice.split('.').join('');
    return (
        <li className='item-index-indv'>
            <div className='photo-cont'>
                {/* <img className='index-item-photo' src={item.photoUrl}></img> */}
            </div>
            <div className='right-side'>
                <span className='index-item-title'>{item.title}</span>
                <span className='index-item-category'>{item.category}</span>
                <span className='index-item-description'>{item.description}</span>
                <span className='index-item-rate'>{updatedPrice}</span>
            </div>
        </li>
    )
};

export default ItemIndexIndv;