import React from "react";
import * as PropTypes from "prop-types";
import LanguageText from "./LanguageText";

class TodoItem extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    draft: PropTypes.bool,
  };
  static defaultProps = {
    draft: false,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { text, completed, draft } = this.props;
    return (
      <li>
        <span>{text}</span>
        {!draft && (
          <button onClick={this.handleClick}>
            <LanguageText
              translationKey={completed ? "uncomplete" : "complete"}
            />
          </button>
        )}
      </li>
    );
  }

  handleClick($e) {
    const { onCompleteChange, completed } = this.props;
    $e.preventDefault();
    onCompleteChange(!completed);
  }
}

export default TodoItem;
