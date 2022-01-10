import React from "react";

const TodoItem = ({ data, toggleCompleteTodo, deleteTodo }) => {
  const { text, complete } = data;

  return (
    // Render Materialize structure
    <li className="row">
      <div className="col s12 m8 offset-m2">
        <div className="card horizontal">
          <div className="card-stacked">
            <div
              className={`card-content ${
                complete && "teal-text text-accent-4"
              }`}
            >
              <p>
                {text}
                {complete && (
                  <span className="new badge" data-badge-caption="!">
                    Complete
                  </span>
                )}
              </p>
            </div>
            <div className="card-action row">
              <button
                onClick={toggleCompleteTodo} // call function on click
                className="waves-effect waves-light btn col s6 m4 offset-m1"
              >
                {complete ? "Reset" : "Complete"}
              </button>
              <button
                onClick={deleteTodo} // call function on click
                className="waves-effect waves-light btn col s5 offset-s1 m4 offset-m2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
