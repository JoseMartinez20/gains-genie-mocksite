import React, { useEffect } from "react";
import styled from "styled-components";
import stockProfileImage from "../assets/stock-profile-image.png";
import { Box } from "../../src/styles/texStyles";
import { TitleStyle, SubtitleStyle, NormalTextStyle } from "../styles/postAuthStyles"
import ButtonsSection from "../sections/dashboardPage/ProfileButtonsSection"

function ProfileInfo() {
  return (
    <BoxTopRight>
        <div>
            <Ellipse> <img src={stockProfileImage}></img> </Ellipse>
        </div>
        <div>
          <Name> Jessica Jimenez </Name>
          <UserName>@jess1938</UserName>
        </div>
        {/* Add friends,followers, routines stats */}
        <Line/>
        <ButtonsSection/>

            
    </BoxTopRight>
  );
}
export default ProfileInfo;


const Ellipse = styled.div.attrs({
    className: "Ellipse",
})`
    width: 82.41px; 
    height: 82.41px; 
    left: 0px;
    top: 0;
    position: 'relative';
    background-color: '#C5C4C4'; 
    border-radius: 9999px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 5px
`;

const Name = styled(TitleStyle).attrs({
    className: "Name",
  })`
  margin: 0 0 5px 0;
`;

const UserName = styled(SubtitleStyle).attrs({
    className: "UserName",
  })`
  margin: 0 0 0 0;
`;

const BoxTopRight = styled(Box).attrs({
  className: "BoxTopRight",
})`
  width: 453px; 
  height: 470px; 
  background-color: #ffffff;
  left: 60%;
  right: 10%;
  border-radius: 30px;
`;

const Line = styled(Box).attrs({
  className: "Line",
})`
  height: 1px;
  width: 328px;
  background: rgba(136, 136, 136, 0.30);
  position: static;
  margin: 10px auto 10px auto;
`

{/* <div className="Content" style={{width: 1044, height: 1590, position: 'relative', background: '#F4F3F3'}} />
<div className="TemporaryProfilePic" style={{width: 82.41, height: 82.41, position: 'relative'}}>
  <div className="Ellipse1" style={{width: 82.41, height: 82.41, left: 0, top: 0, position: 'absolute', background: '#C5C4C4', borderRadius: 9999}} />
  <img className="Image2" style={{width: 46.46, height: 56.25, left: 18.13, top: 26.13, position: 'absolute'}} src="https://via.placeholder.com/46x56" />
</div>
<div className="Vector" style={{width: 15.92, height: 15.92, transform: 'rotate(180deg)', transformOrigin: '0 0', background: 'black'}}></div> */}
