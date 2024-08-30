import React from "react";
import Table from "../components/Table.jsx";
import Modal from "../components/Modal.jsx";
import { useDispatch } from "react-redux";
import { modalVisable } from "../action/index.js";

const TodoList = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modalVisable());
  };
  return (
    <>
      <div className="text-3xl">TO DO LIST</div>
      <Table />
      <div>
        <button
          onClick={openModal}
          className="rounded-lg hover:bg-blue-300 bg-blue-500 p-3 mt-10"
        >
          Add
        </button>
      </div>
      <Modal />
    </>
  );
};

export default TodoList;
