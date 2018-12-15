import {
  ADD_HIKE,
  FETCH_HIKES_BEGIN,
  FETCH_HIKES_SUCCESS,
  FETCH_HIKES_FAILURE
} from "./actions";

const initialState = {
  error: false,
  hikes: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HIKE:
      return Object.assign({}, state, {
        hikes: [...state.hikes, action.payload]
      });
    case FETCH_HIKES_BEGIN:
      return Object.assign({}, state, { error: false });
    case FETCH_HIKES_SUCCESS:
      return Object.assign({}, state, { hikes: action.payload });
    case FETCH_HIKES_FAILURE:
      return Object.assign({}, state, { error: true });
    default:
      return state;
  }
};

export default rootReducer;
