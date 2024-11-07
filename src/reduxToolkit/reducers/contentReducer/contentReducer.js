import { createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../../../localStorage/LocalStorageService";
const localStorageService = LocalStorageService.getService();
const initialState = {
  cssAndHtmlParse: localStorageService?.getCssAndHtmlParse() || null,
  css: localStorageService?.getCssAndHtmlParse()?.css || "",
  html: localStorageService?.getCssAndHtmlParse()?.html || "",
  js: localStorageService?.getCssAndHtmlParse()?.js || "",
};

export const contentSlice = createSlice({
  name: "contentSlice",
  initialState,
  reducers: {
    setCssAndHtmlParse: (state, action) => {
      let cssAndHtmlParse = action.payload;
      localStorageService.setCssAndHtmlParse(cssAndHtmlParse);
      state.cssAndHtmlParse = cssAndHtmlParse;
      state.css = cssAndHtmlParse?.css;
      state.js = cssAndHtmlParse?.js;
      state.html = cssAndHtmlParse?.html;
    },
    setCss: (state, action) => {
      state.css = action.payload;
    },
    setHtml: (state, action) => {
      state.html = action.payload;
    },
    setJs: (state, action) => {
      state.js = action.payload;
    },
  },
});
export const selectorContent = (state) => state.contentSlice;
export const { setCssAndHtmlParse, setCss, setHtml, setJs } =
  contentSlice.actions;

export default contentSlice.reducer;
