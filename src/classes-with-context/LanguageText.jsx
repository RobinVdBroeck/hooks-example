import * as React from "react";
import * as PropTypes from "prop-types";
import { LanguageContext, SelectedLanguageContext } from "./contexts";

class LanguageText extends React.Component {
  static propTypes = {
    translationKey: PropTypes.string.isRequired,
  };

  render() {
    const { translationKey } = this.props;

    return (
      <LanguageContext.Consumer>
        {(languages) => (
          <SelectedLanguageContext.Consumer>
            {(selectedLanguage) => (
              <span>
                {languages?.[selectedLanguage]?.[translationKey] ??
                  "not-found:`" + translationKey + "`"}
              </span>
            )}
          </SelectedLanguageContext.Consumer>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default LanguageText;
