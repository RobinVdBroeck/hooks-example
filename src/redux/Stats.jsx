import React from "react";
import { useSelector } from "react-redux";
import LanguageText from "./LanguageText";
import { selectFilter } from "./features/todos/selectors";

const Stats = () => {
  const todos = useSelector(selectFilter("ALL"));
  const completed = useSelector(selectFilter("COMPLETED"));
  const notCompleted = useSelector(selectFilter("NOT-COMPLETED"));

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
        <span>{completed.length}</span>
      </p>
      <p>
        <strong>
          # <LanguageText translationKey="uncompleted" />:{" "}
        </strong>
        <span>{notCompleted.length}</span>
      </p>
    </div>
  );
};

Stats.propTypes = {};

export default Stats;
