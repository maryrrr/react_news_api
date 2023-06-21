const AppReducer = (state, action) => {
    switch (action.type) {
      case "GET_DOCS":
        return {
          ...state,
          articles: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default AppReducer;
  