import React from "react";
import PropTypes from "prop-types";
import LanguageText from "./LanguageText";

class LanguageSelector extends React.Component {
  static propTypes = {
    onSelectLanguage: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <h2>
          <LanguageText translationKey="language-selection" />
        </h2>
        <div>
          <button onClick={this.onButtonClick("en")}>
            <LanguageText translationKey="english" />
          </button>
          <button onClick={this.onButtonClick("nl")}>
            <LanguageText translationKey="dutch" />
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
