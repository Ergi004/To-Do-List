import React from "react";
import AddTask from "./AddTask";
import ToDoList from "./ToDoList";
import { getAllTodos } from "@/api";

async function Page() {
  const tasks = await getAllTodos();

  return (
    <div className="max-w-4xl mx-auto mt-5 w-full">
      <div className="text-center my-5 flex flex-col gap4">
        <h1 className="text-2xl">To Do App</h1>
        <AddTask />
      </div>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default Page;
