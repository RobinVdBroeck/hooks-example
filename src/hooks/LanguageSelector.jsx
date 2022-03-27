import React, { useCallback } from "react";
import PropTypes from "prop-types";
import LanguageText from "./LanguageText";

const LanguageSelector = ({ onSelectLanguage }) => {
  // Do not use this in an if, because than the
  // order of the hooks change. See: https://reactjs.org/docs/hooks-rules.html
  const onButtonClick = (lang) =>
    useCallback(($e) => {
      $e.preventDefault();
      onSelectLanguage(lang);
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
LanguageSelector.propTypes = {
  onSelectLanguage: PropTypes.func.isRequired,
};

export default LanguageSelector;
