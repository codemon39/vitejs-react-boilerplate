import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, modalVisable, editList } from "../action/index";

const Modal = () => {
  const data = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");
  console.log(data.list[data.id]?.content);
  useEffect(() => {
    setInputValue({ ...inputValue, content: data.list[data.id]?.content });
  }, [data]);
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addList(inputValue));
    dispatch(modalVisable());
    setInputValue({ ...inputValue, content: "" });
  };
  const editTask = () => {
    dispatch(editList(inputValue, data.id));
    dispatch(modalVisable());
  };
  const modalClose = () => {
    dispatch(
      modalVisable({ ...inputValue, content: data.list[data.id]?.content })
    );
    setInputValue({ ...inputValue, content: "" });
  };
  return (
    <>
      <div
        className={`${
          data.modal === true ? "block" : "hidden"
        } w-3/5 fixed bg-slate-400 mt-20 pr-6 rounded-3xl`}
      >
        <span
          className=" hover:text-gray-700 text-3xl float-right cursor-pointer p-3"
          onClick={modalClose}
        >
          &times;
        </span>
        <div className="p-16 justify-center flex">
          <textarea
            className="w-4/5"
            placeholder="Enter content"
            value={inputValue.content}
            onChange={(e) =>
              setInputValue({ ...inputValue, content: e.target.value })
            }
          />
        </div>
        <button
          className="p-3 hover:bg-green-400 bg-green-600 m-3 rounded-lg"
          onClick={data.id === undefined ? addTask : editTask}
        >
          {data.id === undefined ? "ADD" : "EDIT"}
        </button>
      </div>
    </>
  );
};

export default Modal;
