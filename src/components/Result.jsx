import { useState, useEffect, useContext } from "react";

import { DataConst } from "../context/DataProvide";

import { Box, styled } from "@mui/material";
import { selectorContent } from "../reduxToolkit/reducers/contentReducer/contentReducer";
import { useSelector } from "react-redux";

const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const [src, setSrc] = useState("");
  const { css, html, js } = useSelector(selectorContent);
  const srcCode = `
        <html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${js}</script>
        </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js, srcCode]);

  return (
    <Container style={html || css || js ? null : { background: "#444857" }}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
