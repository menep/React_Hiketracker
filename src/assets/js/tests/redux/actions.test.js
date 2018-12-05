import * as actions from "../../state/actions";

describe("actions", () => {
  const everest = {
    name: "Everest Base Camp Trek",
    date: "11 / 05 / 2018",
    duration: "200",
    rating: "5",
    id: "123123"
  };

  it("should correctly return an ADD_HIKE object", () => {
    const expectedAction = {
      type: actions.ADD_HIKE,
      payload: everest
    };

    expect(actions.addHike(everest)).toEqual(expectedAction);
  });
});
