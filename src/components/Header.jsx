import { AppBar, Button, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { DataConst } from "../context/DataProvide";
import { fetchCss } from "../API/api_call";
import FileUpload from "./FileUpload";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorContent,
  setCss,
  setHtml,
} from "../reduxToolkit/reducers/contentReducer/contentReducer";
const Contain = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

function Header() {
  const { css, html, js } = useSelector(selectorContent);
  const dispatch = useDispatch();
  async function fetchData() {
    const cssData = await fetchCss(
      "https://gallopade.blob.core.windows.net/$web/3C973977C0914E91B02163B0F77A70D9.css"
    );
    dispatch(setCss(cssData));
  }
  const htmlHandler = (html) => {
    dispatch(setHtml(html));
  };

  return (
    <Contain position="static">
      <Toolbar>
        <img src={Logo} alt="code-logo" style={{ width: "90px" }} />
        <Button
          onClick={() => {
            console.log("==html===>>", html);
            console.log("=======css===>>", css);
            console.log("============js===>>", js);
          }}
        >
          Export Code{" "}
        </Button>

        <FileUpload
          setHtml={(html) => {
            htmlHandler(html);
          }}
        />

        <Button onClick={() => fetchData()}>Fetch CSS </Button>

        <FileUpload
          setHtml={(html) => {
            htmlHandler(html);
          }}
          acceptType={".css"}
        />
      </Toolbar>
    </Contain>
  );
}

export default Header;
