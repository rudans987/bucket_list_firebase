// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

const BucketList = (props) => {
// console.log(props);
// const my_lists = props.list;
const navigate = useNavigate();
const my_lists = useSelector((state)=> state.bucket.list);

return (
<ListStyle>
{my_lists.map((list, index) => {
return (
<ItemStyle  completed={list.completed} className="list_item" key={index} onClick={()=>{
        navigate("/detail/"+index);
    }}>
{list.text}
</ItemStyle>
);
})}
</ListStyle>
);
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
overflow-x: hidden;
overflow-y: auto;//옆에 스크롤바 생기게 하기
max-height: 50vh;
`;

const ItemStyle = styled.div`
height:17px;
padding: 16px;
margin: 8px;
color:${(props)=>(props.completed ? "#fff":"#333" )};
background-color: ${(props)=>(props.completed ? "#673ab7":"aliceblue" )};
`;



export default BucketList;