export const AddTask = ({ tasks, setTasks, todo, setTodo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (todo.id) {
      const date = new Date();
      const updatedTask = tasks.map((task) =>
        task.id === todo.id
          ? {
              id: todo.id,
              name: todo.name,
              time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            }
          : task
      );
      setTasks(updatedTask);
      setTodo({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: event.target.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };
      setTasks([...tasks, newTask]);
      setTodo({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          value={todo.name || ""}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <button type="submit">{todo.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
