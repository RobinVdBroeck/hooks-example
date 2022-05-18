import React, { useCallback } from "react";
import * as PropTypes from "prop-types";
import LanguageText from "./LanguageText";

const TodoItem = ({ text, completed, draft, onCompleteToggle }) => {
  const handleClick = useCallback(
    ($e) => {
      $e.preventDefault();
      onCompleteToggle();
    },
    [completed, onCompleteToggle]
  );

  return (
    <li>
      <span>{text}</span>
      {!draft && (
        <button onClick={handleClick}>
          <LanguageText
            translationKey={completed ? "uncomplete" : "complete"}
          />
        </button>
      )}
    </li>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onCompleteToggle: PropTypes.func,
  draft: PropTypes.bool,
};

TodoItem.defaultProps = {
  draft: false,
};

export default TodoItem;
