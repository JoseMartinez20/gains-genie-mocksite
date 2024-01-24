import React from "react";
import styled from "styled-components";

export const ctaButton = styled.button.attrs({
    className: "Profile Button",
  })`
    color: white;
    //text-decoration:    
    max-width: 525px;
    max-height: 40px; 
    background: #4572A7;
    border-radius: 10px;
    //padding: 9px 20px;
    //border: 1px solid rgba(255, 255, 255, 0.25);
    //transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    //margin: 10px 100px;
    display: grid;
    //to define depending on which component it's in: 
        //font-size: 17px;
        //max-width: 525px; if different
        //max-height: 40px; if different
`