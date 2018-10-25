const initialState = {
  hikes: [
    {
      date: "13/10/18",
      name: "Mount Blanc",
      duration: "12",
      rating: "***",
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
