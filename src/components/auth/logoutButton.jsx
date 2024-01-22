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
  font-size: 20px;
  background: #fff;
  border: none;
  font-weight: 700;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
`;
