import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorContent,
  setCssAndHtmlParse,
} from "../../reduxToolkit/reducers/contentReducer/contentReducer";
function EventListener({ children }) {
  const dispatch = useDispatch();
  const { cssAndHtmlParse } = useSelector(selectorContent);
  useEffect(() => {
    const receiveMessage = (event) => {
      // Ensure the message is from the expected origin
      if (event?.origin === "http://localhost:8080") {
        if (event?.data?.action == "cssAndHtmlParse") {
          console.log("Received message:");
          dispatch(setCssAndHtmlParse(event?.data));
        }
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => window.removeEventListener("message", receiveMessage);
  }, []);
  console.log("cssAndHtmlParse", cssAndHtmlParse);
  return <Loader isLoading={cssAndHtmlParse == null}>{children}</Loader>;
}

export default EventListener;
