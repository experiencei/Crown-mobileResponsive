// import SHOP_DATA from './shop.data';
import shopTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching : true,
  errorMessage : undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTIONS_START:
      return{
        ...state,
        isFetching : true
      }
    case shopTypes.FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state,
        isFetching : false,
        collections : action.payload
      }
    case shopTypes.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching : false,
        errorMessage : action.payload
      }
    default:
      return state;
  } 
};

export default shopReducer;

