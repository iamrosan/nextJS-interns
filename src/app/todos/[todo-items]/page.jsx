import React from "react";
import TodosItemsComponent from "@/components/todos-items-component/TodosItemsComponent";

const TodoItems = ({ params }) => {
  return (
    <div>
      <TodosItemsComponent id={params["todo-items"]} />
    </div>
  );
};

export default TodoItems;
