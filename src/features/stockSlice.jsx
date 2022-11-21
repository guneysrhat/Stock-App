import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "auth",

  initialState: {
    purchases: null,
    sales: null,
    products: null,
    brands: null,
    firms: null,
    categories: null,
    error: false,
    loading: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    //! butun stateleri tek seferde almka icin payload dest. edildi. acildi
    getSuccess: (state, { payload: { data, url } }) => {
      //! square bracekt yontemi ile url ile hepsine tek seferde ulasildi
      state[url] = data;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail } = stockSlice.actions;
export default stockSlice.reducer;
