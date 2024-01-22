import styled from "styled-components";
import stockProfileImage from "../assets/stock-profile-image.png";

function ProfileInfo() {
  return (
    <div>
        <div>
            <Ellipse> <img src={stockProfileImage}></img> </Ellipse>
        </div>
            <Name> Jessica Jimenez </Name>
            <UserName>@jess1938</UserName>
    </div>
  )
}


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

const Name = styled.h5`
    text-align: center;
`;

const UserName = styled.h6`
    text-align: center;
`;

export default ProfileInfo;

{/* <div className="Content" style={{width: 1044, height: 1590, position: 'relative', background: '#F4F3F3'}} />
<div className="TemporaryProfilePic" style={{width: 82.41, height: 82.41, position: 'relative'}}>
  <div className="Ellipse1" style={{width: 82.41, height: 82.41, left: 0, top: 0, position: 'absolute', background: '#C5C4C4', borderRadius: 9999}} />
  <img className="Image2" style={{width: 46.46, height: 56.25, left: 18.13, top: 26.13, position: 'absolute'}} src="https://via.placeholder.com/46x56" />
</div>
<div className="Vector" style={{width: 15.92, height: 15.92, transform: 'rotate(180deg)', transformOrigin: '0 0', background: 'black'}}></div> */}
