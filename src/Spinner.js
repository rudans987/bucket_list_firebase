import React from"react";
import styled from "styled-components";
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
const Spinner = (props)=> {
    return (
        <Outter>
            <FlipCameraAndroidIcon style={{
                color: "#673ab7",
                fontSize: "150px"
            }}
                />
        </Outter>
    );
}


const Outter = styled.div`
    background: #b9a8d7;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Spinner;