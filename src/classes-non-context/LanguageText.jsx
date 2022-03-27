import * as React from "react";
import * as PropTypes from "prop-types";

class LanguageText extends React.Component {
  static propTypes = {
    languages: PropTypes.shape({ en: PropTypes.object, nl: PropTypes.object })
      .isRequired,
    selectedLanguage: PropTypes.string.isRequired,
    translationKey: PropTypes.string.isRequired,
  };

  render() {
    const { languages, selectedLanguage, translationKey } = this.props;
    return (
      <span>
        {languages?.[selectedLanguage]?.[translationKey] ??
          "not-found:`" + translationKey + "`"}
      </span>
    );
  }
}

export default LanguageText;
