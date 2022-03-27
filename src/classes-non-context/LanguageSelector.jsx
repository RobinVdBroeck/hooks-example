import React from "react";
import PropTypes from "prop-types";
import LanguageText from "./LanguageText";

class LanguageSelector extends React.Component {
  static propTypes = {
    languages: PropTypes.shape({ en: PropTypes.object, nl: PropTypes.object })
      .isRequired,
    selectedLanguage: PropTypes.string.isRequired,
    onSelectLanguage: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <h2>
          <LanguageText
            languages={this.props.languages}
            selectedLanguage={this.props.selectedLanguage}
            translationKey="language-selection"
          />
        </h2>
        <div>
          <button onClick={this.onButtonClick("en")}>
            <LanguageText
              languages={this.props.languages}
              selectedLanguage={this.props.selectedLanguage}
              translationKey="english"
            />
          </button>
          <button onClick={this.onButtonClick("nl")}>
            <LanguageText
              languages={this.props.languages}
              selectedLanguage={this.props.selectedLanguage}
              translationKey="dutch"
            />
          </button>
        </div>
      </>
    );
  }

  onButtonClick = (lang) => ($e) => {
    const { onSelectLanguage } = this.props;
    $e.preventDefault();
    onSelectLanguage(lang);
  };
}

export default LanguageSelector;
