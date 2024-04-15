"use client";
import Button from "@mui/material/Button";
import { CiCirclePlus } from "react-icons/ci";
import TaskModal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTextValue, setNewTextValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    let uuid = uuidv4();
    e.preventDefault();
    await addTodo({
      id: uuid,
      text: newTextValue,
    });
    setNewTextValue("");
    setModalOpen(false);
    router.refresh();
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
          <h3 className="font-bold text-lg text-center text-blue-200">Add new task</h3>
          <div className="modal-action justify-center text-blue-200">
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
