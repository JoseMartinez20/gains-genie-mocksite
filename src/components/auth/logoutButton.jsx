import React from "react";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

function LogOutButton(props) {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Button onClick={props.onClick}>{props.title}</Button>
    </div>
  );
}

export default LogOutButton;

const Button = styled.button.attrs({
  className: "Logout Button",
})`
  padding: 4px 20px;
  // Make font-size 40px
  font-size: 80px;
  background: #fff;
  font-weight: 700;
  border-radius: 10px;
  // Delete upto...
  position: relative;
  margin-left: auto;
  margin-right: 0;
  bottom: 90%;
  top: 2%;
  left: 1500%;
  // Here
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
`;
