import React from "react";

const CreateTodoButton = ({ openModal, setOpenModal }) => {
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="row">
      <button
        onClick={toggleModal}
        className="waves-effect waves-light btn col s12 m6 offset-m3"
      >
        Add
      </button>
    </div>
  );
};

export default CreateTodoButton;
