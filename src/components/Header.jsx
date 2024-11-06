import { AppBar, Button, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { DataConst } from "../context/DataProvide";
import { fetchCss } from "../API/api_call";
import FileUpload from "./FileUpload";
const Contain = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

function Header() {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataConst);

  async function fetchData() {
    const cssData = await fetchCss(
      "https://gallopade.blob.core.windows.net/$web/3C973977C0914E91B02163B0F77A70D9.css"
    );
    setCss(cssData);
  }

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

        <FileUpload setHtml={setHtml} />

        <Button onClick={() => fetchData()}>Fetch CSS </Button>

        <FileUpload setHtml={setCss} acceptType={".css"} />
      </Toolbar>
    </Contain>
  );
}

export default Header;
