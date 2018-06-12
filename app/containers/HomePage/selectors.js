/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

// ------------------------Selector for API -------------------------------- //
// const makeOnlineStoreData = () => createSelector(
//   selectHome,
//   (homeState) => homeState.get('mockData')
// );

const makeMockDataLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const makeMockDataData = () => createSelector(
  selectHome,
  (homeState) => homeState.getIn(['mockData']).toJS()
);

const makeMockDataError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);
//---------------------------------------------------------------------------

const makeSearchData = () => createSelector(
  selectHome,
  (homeState) => homeState.get('search')
);

const makeCategories = () => createSelector(
  selectHome,
  (homeState) => homeState.get('categories').toJS()
);

// -------------------- get Comments for unique character -----------------------------------//
const getCommentsId = (state, props) => props.id; // ----- props from Comment

const makeComments = () => createSelector(
  selectHome, getCommentsId,
  (homeState, id) =>
    // 
      homeState.get('mockCommens').find((comment) => comment.id === id)
  );

// ----------------- Data for page Basket --------------------------------------
const makeTotalBasketCount = () => createSelector(
  selectHome,
  (homeState) => {
    const dataForFilter = homeState.get('itemsId').toJS().map((item) => item.name);

// -------------- Filterind unique by 'itemsId' - only for one item BasketCount ----
    function unique(dataForFilter) {
      return dataForFilter.filter(function (a) {
        return !this[a] ? this[a] = true : false;
      }, {});
    }
    return unique(dataForFilter).length;
  }
);

const makeTotalBasketPrice = () => createSelector(
  selectHome,
  (homeState) => {

    const dataForFilter = homeState.getIn(['itemsId']).toJS().map((item) => item.price);
//console.log(dataForFilter)
// -------------- Filterind unique by 'itemsId' only - for one item BasketPrice ---
    function unique(dataForFilter) {
      return dataForFilter.filter(function (a) {
        return !this[a] ? this[a] = true : false;
      }, {});
    }
    const itemPriceTotal = unique(dataForFilter);
    const resultPrice = itemPriceTotal.map((item) =>
      parseFloat(item)).reduce((sum, current) => (sum + current), 0);
    return resultPrice;
  });

const makeBasketWithCount = () => createSelector(
  selectHome,
  (homeState) => homeState.get('itemsId').toJS()
);


export {
  selectHome,
  //makeOnlineStoreData,
  makeMockDataData,
  makeTotalBasketCount,
  makeTotalBasketPrice,
  makeSearchData,
  makeCategories,
  makeBasketWithCount,
  makeMockDataLoading,
  makeMockDataError,
  makeComments,

};
