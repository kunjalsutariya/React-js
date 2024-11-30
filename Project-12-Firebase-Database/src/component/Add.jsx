import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, DeleteTodo, ViewTodo } from "../redux/Action/TodoAction";

const Add = () => {
  const [list, setList] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { list };
    dispatch(addTodo(obj));
    setList("");
    alert("Your record is added");
  };

  const AllTodos = useSelector(state => state.todo.todoList || []); // Default to an empty array

  useEffect(() => {
    dispatch(ViewTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(DeleteTodo(id));
    alert("Your record is being deleted...");
  };

  return (
    <div align="center">
      <div className="w-50 mt-5 p-3">
        <h2 className="bg-secondary text-white p-2 rounded-4">Todo List</h2>
        <div className="mt-4">
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
            style={{ borderRadius: "10px 0 0 10px", boxShadow:"none"}}
              type="text"
              className="w-100 ps-2"
              placeholder="Add a Todo.."
              onChange={(e) => setList(e.target.value)}
              value={list}
            />
            <button type="submit" className="btn btn-secondary text-white" style={{ borderRadius: "0 10px 10px 0" }}>
              Submit
            </button>
          </form>
        </div>
        <div className="bg-light mt-4 p-4 rounded-4">
          <ul className="p-0 m-0">
            {
              AllTodos.map((item, index) => (
                <li key={index} className="d-flex justify-content-between p-2">
                  <h4 className="p-0 m-0 w-50 d-flex flex-start">{item.list}</h4>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDelete(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Add;
