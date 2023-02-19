import { createSlice } from "@reduxjs/toolkit";

const hamburgerToggleSlice = createSlice({
  name: "hamburgerToggle",
  initialState: { value: false },
  reducers: {
    hamburgerToggled(state) {
      //immer makes it immutable
      state.value = !state.value;
    },
  },
});

export const { hamburgerToggled } = hamburgerToggleSlice.actions;
export default hamburgerToggleSlice.reducer;
