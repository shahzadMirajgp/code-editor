import jwtDecode from "jwt-decode";
import { v4 as uuidv4 } from "uuid";
// Define the storage type variable
export const storageType = window.sessionStorage; // Change this to localStorage to switch storage type
const LocalStorageService = (function () {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }

  function _setCssAndHtmlParse(cssAndHtmlParse) {
    storageType.setItem("cssAndHtmlParse", JSON.stringify(cssAndHtmlParse));
  }

  function _getCssAndHtmlParse() {
    let string = storageType.getItem("cssAndHtmlParse");
    return JSON?.parse(string) || null;
  }

  function _clearToken() {
    storageType.removeItem("cssAndHtmlParse");
  }

  return {
    getService: _getService,
    setCssAndHtmlParse: _setCssAndHtmlParse,
    getCssAndHtmlParse: _getCssAndHtmlParse,
    clearToken: _clearToken,
  };
})();
export default LocalStorageService;
