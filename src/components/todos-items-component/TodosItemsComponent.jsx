"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/todoItems.module.css";
import instance from "@/config/axiosConfig";
import ButtonComponent from "../shared/button-component/ButtonComponent";
import SpinnerComponent from "../shared/spinner-component/SpinnerComponent";
import { useRouter } from "next/navigation";
const TodosItemsComponent = ({ id }) => {
  const router = useRouter();
  console.log("router", router);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({});

  const handleGoBack = () => {
    router.back();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get("/users");
        const userDetails = res?.data?.filter((curElem) => {
          return curElem.id === Number(id);
        });
        setUser(userDetails);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);
  return (
    <>
      <div>
        <ButtonComponent
          label={"Go Back"}
          variant={"contained"}
          handleClick={handleGoBack}
        />
      </div>
      <div className={styles.container}>
        {loading ? (
          <>
            <SpinnerComponent />
          </>
        ) : user.length === 0 ? (
          <>NO USER FOUND</>
        ) : (
          <>
            <div className={styles.name}>Name:{user[0]?.name}</div>
            <div className={styles.username}>Username:{user[0]?.username}</div>
            <div className={styles.name}>Email:{user[0]?.email}</div>
            <div className={styles.name}>
              Address:{" "}
              {user[0]?.address.street.concat(
                ", ",
                user[0]?.address.suite,
                ", ",
                user[0]?.address.city,
                ", ",
                user[0]?.address.zipcode
              )}
            </div>
            <div className={styles.name}>Phone: {user[0]?.phone}</div>
            <div className={styles.name}>Website: {user[0]?.website}</div>
          </>
        )}
      </div>
    </>
  );
};

export default TodosItemsComponent;
