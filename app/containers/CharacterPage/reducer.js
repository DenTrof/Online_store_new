
import { fromJS } from 'immutable';
import { ROUTE_BY_ID } from './constants';
import { eveData } from 'containers/HomePage/mockEveData.js';


// The initial state of the App
const initialState = fromJS({
  mockDataId: eveData,
  mockIntermediate: {},

});

function characterReducer(state = initialState, action) {
  switch (action.type) {

    case ROUTE_BY_ID:
      return state.set('mockIntermediate',
         state.get('mockDataId').toJS().find((DataId) => DataId.id === action.id));

    default:
      return state;
  }
}

export default characterReducer;

