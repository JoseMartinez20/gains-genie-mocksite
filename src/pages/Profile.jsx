import React, { useEffect } from "react";
import { auth } from "../config/firebase.js";
import styled from "styled-components";
import { useState } from "react";

function Profile() {
    const [userName, setUserName] = useState("")
    //show user's actual name and actual username from db
    setUserName("Jessica Jimenez");

    //show user's # of friends, followers, and routines

    return (
        <div>
            {userName}
        </div>
    )
};

export default Profile;