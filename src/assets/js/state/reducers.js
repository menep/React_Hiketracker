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
    case "ADD_HIKE":
      return { ...state, hikes: state.hikes.concat(action.payload) };
    default:
      return state;
  }
};

export default rootReducer;
