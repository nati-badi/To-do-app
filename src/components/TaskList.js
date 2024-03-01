export const TaskList = ({ tasks, setTasks, todo, setTodo }) => {
  const handleDelete = (taskId) => {
    const deleted = tasks.filter((task) => task.id !== taskId);
    setTasks(deleted);
  };

  const handleEdit = (taskId) => {
    const selectedTask = tasks.find((task) => task.id === taskId);
    setTodo(selectedTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasks.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasks([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
