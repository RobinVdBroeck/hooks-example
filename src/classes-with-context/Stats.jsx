import * as React from "react";
import * as PropTypes from "prop-types";
import LanguageText from "./LanguageText";

class Stats extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  };

  render() {
    const { todos } = this.props;
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
            # <LanguageText translationKey="todos" /> :
          </strong>
          <span>{todos.length}</span>
        </p>
        <p>
          <strong>
            # <LanguageText translationKey="completed" />:{" "}
          </strong>
          <span>{completed}</span>
        </p>
        <p>
          <strong>
            # <LanguageText translationKey="uncompleted" />:{" "}
          </strong>
          <span>{notCompleted}</span>
        </p>
      </div>
    );
  }
}

export default Stats;
