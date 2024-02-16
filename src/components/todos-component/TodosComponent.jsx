"use client";
import React, { useState, useEffect } from "react";
import instance from "@/config/axiosConfig";
import CardComponent from "../shared/card-component/CardComponent";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";

const TodosComponent = () => {
  const [todos, setTodos] = useState([]);
  const router = useRouter();

  const handleClick = (id) => {
    console.log("id", id);
    router.push(`/todos/${id}`);
  };

  // useQuery
  // const { data, isLoading, status } = useQuery(
  //   {
  //     queryKey: ["todos"],
  //     queryFn: () => {
  //       return instance.get("/todos");
  //     },
  //   },
  //   }
  // );

  // useEffect(() => {
  //   if (status == "success") {
  //     setTodos(data?.data);
  //   }
  // }, [data]);

  // console.log("data", data);

  // UseMutation
  // const {
  //   data: mutateData,
  //   isLoading: mutateLoading,
  //   mutate,
  // } = useMutation({
  //   mutationFn: (payload) => {
  //     console.log("data", payload);
  //     return instance.get("/todos");
  //   },
  //   onSuccess: (data) => {
  //     setTodos(data.data);
  //   },
  // });

  // useEffect hook
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
      {/* button to execute useMutation */}

      {/* <button onClick={() => mutate("hello world")}>Mutate</button> */}

      {/*button to execute useMutation  */}

      {todos &&
        todos.map((todo) => (
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
