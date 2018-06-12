/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  ONLINESTORE_DATA_START, ONLINESTORE_DATA,
  ONLINESTORE_DATA_ERROR, IDS_DATA, ADD_ITEM_TO_BASKET, SEARCH_CHARACTER,
  BASKET_DELETE, RELOAD_ITEMS, ADD_COMMENT, ADD_COMMENT_RANDOM_ID,
} from './constants';
import { fromJS, Map, List } from 'immutable';
// import { eveData } from './mockEveData.js';
import { Categories } from './mockCategories.js';

// The initial state of the App
const initialState = fromJS({
  username: '',
  loading: false,
  error: false,
  mockData: [],
  mockDataRandomId: [],
  mockCommens: {},
  categories: Categories,
  ids: [],
  itemsId: [],
  search: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {

    case IDS_DATA:
      return state.set('ids', action.idsData);

    case ADD_ITEM_TO_BASKET:
      const itemData = state.get('mockData').toJS().find((DataId) => DataId.id === action.id);
      return state.set('itemsId', state.get('itemsId').concat(itemData));

    case SEARCH_CHARACTER:
      return state.set('search', state.get('search').concat(action.text));

    case RELOAD_ITEMS:
      return state.set('search', action.value);

    case BASKET_DELETE:
      return state.set('itemsId', state.get('itemsId')
      .filter((itemsBasket) => itemsBasket.id !== action.id));

    case ADD_COMMENT:
      return state.set('mockCommens', state.get('mockCommens').concat(action.comment));

    case ADD_COMMENT_RANDOM_ID:
      const mockDataIndex = state.getIn(['mockData']).toJS().findIndex((characterIndex) =>
         characterIndex.id === action.articleId.id);

      return state.setIn(['mockData', mockDataIndex, 'commentsId'],
       state.getIn(['mockData', mockDataIndex, 'commentsId']).push(action.randomCommentId));


    // case RELOAD_DATA_HOME_PAGE:
    //   return state.set('itemsId', action.reloadData);

// --------------- API Reduser ------------------------------------
    case ONLINESTORE_DATA_START:
      return state
        .set('loading', true)
        .set('error', false);
        // .setIn('mockData', false);

    case ONLINESTORE_DATA:

      return state
        .set('mockData', fromJS(action.serverData.eveData))
        .set('mockCommens', action.serverData.comments)
        .set('loading', false);

    case ONLINESTORE_DATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
