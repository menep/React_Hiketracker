import { ADD_HIKE } from "./actions";

const initialState = {
  hikes: [
    {
      date: "13 / 10 / 2018",
      name: "Mont Blanc",
      duration: "12",
      rating: "3",
      id: "asdas"
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HIKE:
      return Object.assign({}, state, {
        hikes: [...state.hikes, action.payload]
      });
    default:
      return state;
  }
};

export default rootReducer;
