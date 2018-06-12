
import {
  CHANGE_USERNAME, ONLINESTORE_DATA, ONLINESTORE_DATA_ERROR,
  ONLINESTORE_DATA_START, IDS_DATA, ADD_ITEM_TO_BASKET, SEARCH_CHARACTER,
  BASKET_DELETE, RELOAD_ITEMS, RELOAD_DATA_HOME_PAGE, ADD_COMMENT, ADD_COMMENT_RANDOM_ID,
} from './constants';


export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
export function addItemToBasket(id) {
  // console.log(id);
  return {
    type: ADD_ITEM_TO_BASKET,
    id,
  };
}

export function IdsData(idsData) {
  return {
    type: IDS_DATA,
    idsData,
  };
}

export function searchCharacter(text) {
  return {
    type: SEARCH_CHARACTER,
    text,
  };
}

export function delBasketItem(id) {
  return {
    type: BASKET_DELETE,
    id,
  };
}

export function reloadItem(value) {
  return {
    type: RELOAD_ITEMS,
    value,
  };
}

export function reloadDataHomePage(reloadData) {
  return {
    type: RELOAD_DATA_HOME_PAGE,
    reloadData,
  };
}

// ----------------- data from CommentForm ------------------------

export function addComment(comment) {
  // console.log(comment);
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function addCommentIdmockData(randomCommentId, articleId) {
   // console.log(randomCommentId);
  return {
    type: ADD_COMMENT_RANDOM_ID,
    randomCommentId,
    articleId,
  };
}
// ------------------ API Actions ------------------------------
export function ServerDataStart() {
  return {
    type: ONLINESTORE_DATA_START,
  };
}

export function ServerDataLoaded(serverData) {
	// console.log(serverData);
  return {
    type: ONLINESTORE_DATA,
    serverData,
  };
}

export function ServerDataLoadingError(error) {
  return {
    type: ONLINESTORE_DATA_ERROR,
    error,
  };
}
