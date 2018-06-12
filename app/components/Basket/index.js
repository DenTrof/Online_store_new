import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeTotalBasketCount, makeTotalBasketPrice } from 'containers/HomePage/selectors';
import HeaderLink from 'components/Header/HeaderLink';


function Basket({ totalBasketCount, totalPrice }) {
//console.log(totalPrice)
  return (
    <HeaderLink
      className="color-wite"
      to="/basket"
    >
      <span > { totalBasketCount } &nbsp;</span> item(s) - $ &nbsp;<span >{ totalPrice }</span>
    </HeaderLink>
  );
}

// Basket.propTypes = {
//   totalBasketCount: PropTypes.string,
//   totalPrice: PropTypes.string,
// };

const mapStateToProps = createStructuredSelector({
  totalBasketCount: makeTotalBasketCount(),
  totalPrice: makeTotalBasketPrice(),
});

export default connect(mapStateToProps, null)(Basket);
