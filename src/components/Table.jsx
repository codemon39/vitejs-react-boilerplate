import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteList, modalVisable, checkList, editList } from "../action";

const Table = () => {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();
  const taskDelete = (id) => {
    dispatch(deleteList(id));
  };
  const openModal = (index) => {
    dispatch(modalVisable(index));
  };
  const checkTask = (index) => {
    dispatch(checkList(index));
  };
  return (
    <div className="flex justify-center">
      <table className=" w-4/5 text-white p-10 bg-slate-400 rounded-2xl">
        <tbody>
          {data?.list.map((item, index) => (
            <tr key={index} className="border-b hover:bg-slate-500 ">
              <td>
                <input
                  className="cursor-pointer"
                  onClick={() => checkTask(index)}
                  type="checkbox"
                ></input>
              </td>
              <td className="w-3/5 p-10">{item.content}</td>
              <td>
                <button
                  className="bg-blue-600 hover:bg-blue-400 p-3  rounded-lg"
                  onClick={() => openModal(index)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="bg-red-600 hover:bg-red-500 p-3  rounded-lg"
                  onClick={() => taskDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
