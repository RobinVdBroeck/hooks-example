import React, { useCallback } from "react";
import {useDispatch} from "react-redux";
import LanguageText from "./LanguageText";

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const onButtonClick = (lang) =>
    useCallback(($e) => {
      dispatch({
        type: "languages/selectLanguage", 
        payload: { 
          language: lang
      }}
       );
    });

  return (
    <>
      <h2>
        <LanguageText translationKey="language-selection" />
      </h2>
      <div>
        <button onClick={onButtonClick("en")}>
          <LanguageText translationKey="english" />
        </button>
        <button onClick={onButtonClick("nl")}>
          <LanguageText translationKey="dutch" />
        </button>
      </div>
    </>
  );
};

export default LanguageSelector;
