import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Detail = () => {
  const params = useParams();
  const toDos = useSelector((state) => state);
  const toDo = toDos.filter((e) => {
    return e.id !== params;
  });
  return <h1>{toDo[0].text}</h1>;
};

export default Detail;
