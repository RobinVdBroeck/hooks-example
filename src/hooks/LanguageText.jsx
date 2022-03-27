import React, { useContext } from "react";
import * as PropTypes from "prop-types";
import { LanguageContext, SelectedLanguageContext } from "./contexts";

const LanguageText = ({ translationKey }) => {
  const languages = useContext(LanguageContext);
  const selectedLanguage = useContext(SelectedLanguageContext);

  return (
    <span>
      {languages?.[selectedLanguage]?.[translationKey] ??
        "not-found:`" + translationKey + "`"}
    </span>
  );
};
LanguageText.propTypes = {
  translationKey: PropTypes.string.isRequired,
};
export default LanguageText;
