import * as React from "react";
import * as PropTypes from "prop-types";
import LanguageText from "./LanguageText";

class Stats extends React.Component {
  static propTypes = {
    languages: PropTypes.shape({ en: PropTypes.object, nl: PropTypes.object })
      .isRequired,
    selectedLanguage: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
  };

  render() {
    const { languages, selectedLanguage, todos } = this.props;
    const [completed, notCompleted] = todos.reduce(
      ([completed, notCompleted], todo) => {
        if (todo.completed) {
          return [completed + 1, notCompleted];
        }
        return [completed, notCompleted + 1];
      },
      [0, 0]
    );

    return (
      <div>
        <h3>Stats</h3>
        <p>
          <strong>
            #{" "}
            <LanguageText
              languages={languages}
              selectedLanguage={selectedLanguage}
              translationKey="todos"
            />{" "}
            :
          </strong>
          <span>{todos.length}</span>
        </p>
        <p>
          <strong>
            #{" "}
            <LanguageText
              languages={languages}
              selectedLanguage={selectedLanguage}
              translationKey="completed"
            />
            :{" "}
          </strong>
          <span>{completed}</span>
        </p>
        <p>
          <strong>
            #{" "}
            <LanguageText
              languages={languages}
              selectedLanguage={selectedLanguage}
              translationKey="uncompleted"
            />
            :{" "}
          </strong>
          <span>{notCompleted}</span>
        </p>
      </div>
    );
  }
}

export default Stats;
