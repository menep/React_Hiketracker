import fire from "../firebase/firebase";

export const ADD_HIKE = "ADD_HIKE";
export const FETCH_HIKES_BEGIN = "FETCH_HIKES_BEGIN";
export const FETCH_HIKES_SUCCESS = "FETCH_HIKES_SUCCESS";
export const FETCH_HIKES_FAILURE = "FETCH_HIKES_FAILURE";

export const addHike = hike => ({
  type: ADD_HIKE,
  payload: hike
});

export const fetchHikesBegin = () => {
  return {
    type: FETCH_HIKES_BEGIN
  };
};

export const fetchHikesSuccess = res => {
  return {
    type: FETCH_HIKES_SUCCESS,
    payload: res
  };
};

export const fetchHikesFailure = () => ({
  type: FETCH_HIKES_FAILURE
});

export const fetchHikes = () => {
  return dispatch => {
    dispatch(fetchHikesBegin());
    return fire
      .database()
      .ref("hikes")
      .once("value")
      .then(res => res.toJSON())
      .then(data => {
        dispatch(fetchHikesSuccess(data));
      })
      .catch(() => {
        dispatch(fetchHikesFailure());
      });
  };
};
