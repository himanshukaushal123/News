const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((id) => {
          return id.objectID !== action.payload;
        }),
      };
    case "SEARCH":
      return {
        ...state,
        query: action.payload,
      };
  }
  return state;
};

export default reducer;
