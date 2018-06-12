/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import H2 from 'components/H2';
// import List from 'components/List';
// import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { makeMockDataData, makeSearchData,
 makeMockDataLoading, makeMockDataError } from './selectors';
// import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import Categories from 'components/Categories';
import ImgItemHomePage from 'components/ImgItemHomePage';
// import Background from 'components/Uploads/51u6y9Rm8QL._SY300_.jpg';
// import eveImage from './imageHome.js';
// const imageReq = require.context("./imageHome.js", false, /\.jpg$/);


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() { }

  render() {
   // ----------------- Data from Redux store ----------------------------
    const { loading, error, mockData, searchData } = this.props;

    const Ids = mockData.map((data, id) => id);

    let mockElements = null;

  // ------------------------ Loader Data -----------------------------------------
    if (loading !== false) {
      mockElements = <LoadingIndicator />;
    }

    if (mockData.length > 0) {
      mockElements = mockData.map((mockForItem) => <li key={mockForItem.id}>
        <ImgItemHomePage mockForItem={mockForItem} /></li>);
    }

    if (error !== false) {
      mockElements = (<CenteredSection className="error">
       'Something went wrong, please try again!'
       </CenteredSection>);
    }

  // --------------- Filtering by search from redux store -------------------

    const mockDataFiltered = mockData.map((mockFilter) => mockFilter)
    .filter((elements) => elements.name.toLowerCase().indexOf(searchData.toLowerCase()) > -1);

    if (searchData !== '') {
      mockElements = mockDataFiltered.map((mockForItem) => <li key={mockForItem.id}>
        <ImgItemHomePage mockForItem={mockForItem} /></li>);
    }

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <div>
          <Section >
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Categories />
            <br />
            {/* <div
              style={{ width: '100%', height: '400px',
                backgroundImage: `url(${Background})` }}
            >{mockData[0].name}</div>
            <img src={require.context('components/Uploads/51u6y9Rm8QL._SY300_.jpg')} />*/}
            <ul className="categories-ul" style={{ listStyle: 'none' }}>{ mockElements }</ul>
          </Section>
        </div>
      </article>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  loading: makeMockDataLoading(),
  error: makeMockDataError(),
  searchData: makeSearchData(),
  mockData: makeMockDataData(),
  // onlineStorData: makeOnlineStoreData(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, null)(HomePage);
