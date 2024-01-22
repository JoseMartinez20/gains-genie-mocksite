import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {
  const [userList, setUserList] = useState([]);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    getUserList();
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
export default Dashboard;
