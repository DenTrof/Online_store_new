import { createSelector } from 'reselect';

const selectCharacterPage = (state) => state.get('characterPage');

const makelinkIdData = () => createSelector(
  selectCharacterPage,
  (characterPageState) => characterPageState.get('mockIntermediate')
);

export {
  makelinkIdData,
};