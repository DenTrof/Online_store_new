import React from 'react';
import { connect } from 'react-redux';
import BasketItem from 'components/BasketItem';
import { createStructuredSelector } from 'reselect';
// import {Link} from 'react-router'
import { makeBasketWithCount, makeTotalBasketPrice } from 'containers/HomePage/selectors';

// import {
//   removePhoneFromBasket,
//   basketCheckout,
//   cleanBasket
// } from 'actions'

  // const isBasketEmpty = R.isEmpty(phones)

class BasketList extends React.Component {
  render() {
    const { basketData, totalPrice } = this.props;
    let isBasketEmpty = null;

    if (totalPrice === 0) {
     isBasketEmpty = <div > YOUR SHOPPING CART IS EMPTY </div>;
  }

    const basketDataElements = basketData.map((basketDataItem) => <li key={ basketDataItem.id }>
      <BasketItem basketData={ basketDataItem } /></li>);
    return (
      <div>
        { basketDataElements }
         <p><b> { isBasketEmpty } </b></p>
        <div className="total-user-checkout">
          <p><b>Total : $ { totalPrice } </b></p>
        </div>
      </div>

    );
  }
}

// }

const mapStateToProps = createStructuredSelector({
  basketData: makeBasketWithCount(),
  totalPrice: makeTotalBasketPrice(),
});

// const mapDispatchToProps = {
//   basketCheckout,
//   removePhoneFromBasket,
//   cleanBasket


export default connect(mapStateToProps, null)(BasketList);
