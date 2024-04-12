"use client";
import Button from "@mui/material/Button";
import { CiCirclePlus } from "react-icons/ci";
import TaskModal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTextValue, setNewTextValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: 4,
      text: newTextValue,
    });
    setNewTextValue("");
    setModalOpen(false);
  };
  return (
    <div>
      <Button
        onClick={() => setModalOpen(true)}
        variant="contained"
        sx={{ minWidth: "350px" }}
      >
        Add new task
        <CiCirclePlus className="ml-2" size={25} />
      </Button>
      <TaskModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg text-center">Add new task</h3>
          <div className="modal-action justify-center">
            <input
              value={newTextValue}
              onChange={(e) => setNewTextValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </TaskModal>
    </div>
  );
};

export default AddTask;
