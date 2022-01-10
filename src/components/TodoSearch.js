import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const handleChange = (evt) => {
    const { value } = evt.target; // destruncturing value from evt
    setSearchValue(value); // update searchValue
  };

  return (
    <div className="row">
      <div className="input-field col s8 offset-s2">
        <input
          onChange={handleChange} // Call function on change
          placeholder="Name"
          value={searchValue}
          id="search_todo"
          type="text"
          className="validate"
        />
        <label htmlFor="search_todo">Search TODO</label>
      </div>
    </div>
  );
};

export default TodoSearch;
