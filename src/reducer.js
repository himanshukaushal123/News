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
        nbPages: action.payload.nbPages,
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
    case "Next_Page": {
      let pagenumber = state.page;
      if (pagenumber > 50) {
        pagenumber = 50;
      } else {
        pagenumber++;
      }
      return {
        ...state,
        page: pagenumber,
      };
    }
    case "Prev_page": {
      let pagenumber = state.page;
      if (pagenumber <= 0) {
        pagenumber = 0;
      } else {
        pagenumber--;
      }
      return {
        ...state,
        page: pagenumber,
      };
    }
  }
  return state;
};

export default reducer;
