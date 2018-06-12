
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import H2 from 'components/H2';
// import List from 'components/List';
// import ListItem from 'components/ListItem';
// import LoadingIndicator from 'components/LoadingIndicator';
// import RepoListItem from 'containers/RepoListItem';
import Section from 'containers/HomePage/Section';
import messages from 'containers/HomePage/messages';
import { makeMockDataData } from 'containers/HomePage/selectors';
import Categories from 'components/Categories';
import ImgItemHomePage from 'components/ImgItemHomePage';


export class CategoriesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
 
 // ---------------- Filtering by categories --------------------------------

  render() {
    const categoriesData = this.props.params.name;
    const { mockData } = this.props;

    const categoriesFilterData = mockData.filter((mockCatFilter) => 
      mockCatFilter.categoryId === categoriesData);
    const categories = categoriesFilterData.map((Item) => <li key={Item.id}>
        <ImgItemHomePage mockForItem={Item} /></li>);

    return (
      <article>
        <Helmet
          title="Categories Page"
          meta={[
            { name: 'description', content: 'Categories Page' },
          ]}
        />
        <div>
          <Section >
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Categories />
            <br />
            <ul className="categories-ul" style={{ listStyle: 'none' }}>
            { categories }

            </ul>
          </Section>
        </div>
      </article>
    );
  }

  // allItem(){ 
  //   const mockElements = mockData.map((mockForItem) => <li key={mockForItem.id}>
  //       <ImgItemHomePage mockForItem={mockForItem} /></li>);
  //   return mockElements;
  // }
}


const mapStateToProps = createStructuredSelector({
  mockData: makeMockDataData(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, null)(CategoriesPage);

