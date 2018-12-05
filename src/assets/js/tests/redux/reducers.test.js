import { ADD_HIKE } from "../../state/actions";
import rootReducer from "../../state/reducers";

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

describe("hike reducers", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_HIKE", () => {
    expect(
      rootReducer(initialState, {
        type: ADD_HIKE,
        payload: {
          date: "01 / 01 / 2000",
          name: "Everest",
          duration: "999",
          rating: "5",
          id: "evsbc"
        }
      })
    ).toEqual({
      hikes: [
        {
          date: "13 / 10 / 2018",
          name: "Mont Blanc",
          duration: "12",
          rating: "3",
          id: "asdas"
        },
        {
          date: "01 / 01 / 2000",
          name: "Everest",
          duration: "999",
          rating: "5",
          id: "evsbc"
        }
      ]
    });
  });
});
