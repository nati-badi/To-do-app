import { useEffect, useState } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        todo={todo}
        setTodo={setTodo}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  );
}

export default App;
