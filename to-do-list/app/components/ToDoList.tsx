import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ITask } from "@/types/tasks";
import Task from "./Tasks";

interface ToDoListProps {
  tasks: ITask[];
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 560 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Tasks</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToDoList;
