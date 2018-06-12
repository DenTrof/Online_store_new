/**
 *
 * Img.react.js   
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';   
import PropTypes from 'prop-types';  
import { Link } from 'react-router';
import HeaderLink from 'components/Header/HeaderLink';
import H4 from 'components/H4';
import { addItemToBasket } from 'containers/HomePage/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';


const ImgHome = styled.div`
 list-styl-teype: none; 
 border: 1px solid black; 
 width: 300px; 
 height: 300px;
 background-color: #272424;
 background-size: cover;  
`;
//
//import IMG from 'images/lumia.png';
//
class ImgItemHomePage extends React.Component {
   
  render() {
    const { mockForItem, addItemToBasket } = this.props;
 //console.log(mockForItem);
    return (
      <div style={{ border: '1px solid black' }}>
        <ImgHome style={{ backgroundImage: `url(${mockForItem.image})` }}>
        </ImgHome>
        <div className="caption">
          <H4 className="marginLeft20">${mockForItem.price}
            <Link
              style={{ float: 'right', textDecoration: 'none', marginRight: '20px', color: '#fff' }}
              to={`/character/${mockForItem.id}`}
            >{mockForItem.name}</Link>
          </H4>

          {/* <p className="marginLeft20">Description ....</p>*/}
          <p className="marginLeft20">
            <HeaderLink
              onClick={() => addItemToBasket(mockForItem.id)}
            > Buy Now!
            </HeaderLink>
            <HeaderLink to={`/character/${mockForItem.id}`} >
                More info
            </HeaderLink>
          </p>
        </div>
      </div>
    );
  }

}


// We require the use of src and alt, only enforced by react in dev mode
// ImgHomePage.propTypes = {
//   src: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.object,
//   ]).isRequired,
//   alt: PropTypes.string.isRequired,
//   className: PropTypes.string,
// };


const mapDispatchToProps = {
  addItemToBasket,
};

export default connect(null, mapDispatchToProps)(ImgItemHomePage);
