import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { delBasketItem } from 'containers/HomePage/actions';
import { makeTotalBasketCount } from 'containers/HomePage/selectors';
import { createStructuredSelector } from 'reselect';

function BasketItem({ basketData, delBasketItem, backetLength }) {
  // console.log(backetLength);
  

  return (
    <div className="main-basket-container">
      <div className="basket-container">
        <div className="basket-img">
          <img src={basketData.image} />
        </div>
        <div className="basket-name">{basketData.name}</div>
        <div className="basket-price">$ {basketData.price}</div>
        <div className="basket-count"> 1 </div>
        <div className="delete-cart">
        <img
            onClick={() => delBasketItem(basketData.id)}
            src={require('images/delete.png')}
          />
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = createStructuredSelector({
  backetLength: makeTotalBasketCount(),
});

const mapDispatchToProps = {
  delBasketItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
