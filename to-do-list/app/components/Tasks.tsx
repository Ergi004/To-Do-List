import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ITask } from "@/types/tasks";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
      <TableRow>
        <TableCell>{task.text}</TableCell>
        <TableCell>{task.text}</TableCell>
      </TableRow>
  );
};

export default Task;
