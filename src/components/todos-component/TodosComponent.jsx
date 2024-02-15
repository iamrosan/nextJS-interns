"use client";
import React, { useState, useEffect } from "react";
import instance from "@/config/axiosConfig";
import CardComponent from "../shared/card-component/CardComponent";
import { useRouter } from "next/navigation";
const TodosComponent = () => {
  const [todos, setTodos] = useState([]);
  const router = useRouter();

  const handleClick = (id) => {
    console.log("id", id);
    router.push(`/todos/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get("/todos");
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <CardComponent
          key={todo.id}
          userId={todo.id}
          title={todo.title}
          completed={todo.completed}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default TodosComponent;
