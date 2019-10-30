const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case switchLocation: 
      return {
        jobs: [
          ...state.jobs, 
          action.job
        ]
      };
    default: 
      return state; 
  } 
}

export default reducer;
