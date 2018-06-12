/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const ONLINESTORE_DATA = 'boilerplate/Home/ONLINESTORE_DATA';
export const ONLINESTORE_DATA_ERROR = 'boilerplate/Home/ONLINESTORE_DATA_ERROR';
export const ONLINESTORE_DATA_START = 'boilerplate/Home/ONLINESTORE_DATA_START';
export const IDS_DATA = 'boilerplate/Home/IDS_DATA';
export const ADD_ITEM_TO_BASKET = 'boilerplate/Home/ADD_ITEM_TO_BASKET';
export const SEARCH_CHARACTER = 'boilerplate/Home/SEARCH_CHARACTER';
export const BASKET_DELETE = 'boilerplate/Home/BASKET_DELETE';
export const RELOAD_ITEMS = 'boilerplate/Home/RELOAD_ITEMS';
export const RELOAD_DATA_HOME_PAGE = 'boilerplate/Home/RELOAD_DATA_HOME_PAGE';
export const ADD_COMMENT = 'boilerplate/Home/ADD_COMMENT';
export const ADD_COMMENT_RANDOM_ID = 'boilerplate/Home/ADD_COMMENT_RANDOM_ID';