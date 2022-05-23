import React from "react";
import * as PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectedLanguage } from "./features/language/selectors";

const LanguageText = ({ translationKey }) => {
  const language = useSelector(selectedLanguage);

  return (
    <span>
      {language[translationKey] ?? "not-found:`" + translationKey + "`"}
    </span>
  );
};

LanguageText.propTypes = {
  translationKey: PropTypes.string.isRequired,
};

export default LanguageText;
