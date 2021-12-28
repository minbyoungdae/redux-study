import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

const Home = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };
  let toDos = useSelector((state) => state);

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo) => {
          return <ToDo key={todo.id} text={todo.text} id={todo.id}></ToDo>;
        })}
      </ul>
    </>
  );
};

export default Home;
