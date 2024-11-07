import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataConst } from "../context/DataProvide";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorContent,
  setCss,
  setHtml,
  setJs,
} from "../reduxToolkit/reducers/contentReducer/contentReducer";
const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

function Code() {
  const { css, html, js } = useSelector(selectorContent);
  const dispatch = useDispatch();
  const htmlHandler = (html) => {
    dispatch(setHtml(html));
  };
  const cssHandler = (css) => {
    dispatch(setCss(css));
  };
  const jsHandler = (js) => {
    dispatch(setJs(js));
  };
  return (
    <Container>
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={htmlHandler}
        icon="/"
        color="#FF3C41"
      />
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={cssHandler}
        icon="*"
        color="#0EBEFF"
      />
      {/* <Editor
        language="javascript"
        heading="JS"
        value={js}
        onChange={jsHandler}
        icon="( )"
        color="#FCD000"
      /> */}
    </Container>
  );
}

export default Code;
