import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { makeCategories } from 'containers/HomePage/selectors';
import { createStructuredSelector } from 'reselect';
import H4 from 'components/H4';
import Li from 'components/Li';
import { reloadItem } from 'containers/HomePage/actions';

const CategoriesCSS = styled.div`
  display: inline-flex; 
  align-items: center; 
`;


function Categories({ categories, reloadItem }) {
// console.log(categories)
  const Categories = categories.map((mockCategories) =>
    <Li  key={mockCategories.id}>
      <Link className="categories" to={`/categories/${mockCategories.id}`}>
        <b >{mockCategories.name} / </b>
      </Link>
    </Li>);

  return (
    <CategoriesCSS className="color-wite">
      <span ><b>Categories:</b></span> &nbsp;
      <ul>
        {Categories}
        <Li><Link to="/" onClick={() => reloadItem('')}><b>ALL CATEGORIES </b></Link></Li>
      </ul>

    </CategoriesCSS>

  );
}


const mapStateToProps = createStructuredSelector({
  categories: makeCategories(),
});

const mapDispatchToProps = {
  reloadItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
