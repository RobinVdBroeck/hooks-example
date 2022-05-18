import React, { useMemo } from "react";
import * as PropTypes from "prop-types";
import LanguageText from "./LanguageText";

const Stats = ({ todos }) => {
  // Only recalculates the completed and not completed if the todos changed
  const [completed, notCompleted] = useMemo(
    () =>
      todos.reduce(
        ([completed, notCompleted], todo) => {
          if (todo.completed) {
            return [completed + 1, notCompleted];
          }
          return [completed, notCompleted + 1];
        },
        [0, 0]
      ),
    [todos]
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
};
Stats.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Stats;
