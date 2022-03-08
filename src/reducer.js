
const initialState = {
  entities: [], // array of cats
  status: "idle", // loading state
};

cconst catsSlice = createReducer(
  name: "cats",
  initialState,
  reducers: {

  },

  extraReducers: {
    [fetchCats.pending](state) {
      state.status = "loading";
    },
    [fetchCats.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
) 
export const { catAdded, catUpdated } = catsSlice.actions; 
export default catsSlice.reducer; 