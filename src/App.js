import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createBucket, loadBucketFB, createBucketFB} from "./redux/modules/bucket"
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress";
import Spinner from "./Spinner";
import {db} from "./firebase";
import { 
  collection, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  doc, 
  deleteDoc
} from "firebase/firestore";




function App() {

 
  const text = React.useRef(null);
  const dispatch =useDispatch();
  const is_loaded=useSelector(state =>state.bucket.is_loaded);

   
  React.useEffect(async()=>{
    dispatch(loadBucketFB());

     //정보 가져올때
     // const query = await getDocs( collection(db, "bucket"));
    // query.forEach((doc)=> {
    //   console.log(doc.id, doc.data());
    // })

    //정보 추가할때
    // addDoc(collection(db, "bucket"), {text: "new", completed: false});
    
    //정보 수정할때
    // const docRef = doc(db, "bucket", "AnFw4OvOg6yDIYwqdV7M");
    // updateDoc(docRef, {completed: true});

    //정보 삭제할때
    // const docRef2 = doc(db, "bucket", "AnFw4OvOg6yDIYwqdV7M");
    // deleteDoc(docRef2);
  }, []);
 

  const createBucketList = () => {
    // dispatch(createBucket({text : text.current.value, completed: false}));

    dispatch(createBucketFB({text : text.current.value, completed: false}))
    text.current.value="";
  };
  
  return (
    <div className="App">
      <Container>
         <Title>내 버킷리스트</Title>
        <Progress/>
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Routes>
          <Route path="/" element={<BucketList />}/>          
          <Route path="/detail/:index" element={<Detail />}/>
          <Route elemnet={<NotFound />}/>        
        </Routes>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={createBucketList}>추가하기</button>
      </Input>
      {!is_loaded && <Spinner/>}
      {/* <button onClick={()=>{
        window.scrollTo({top: 0, left: 0, behavior:"smooth"});} 
      }
      >위로가기</button> */}
    </div>
  );
}


const Input = styled.div`
max-width: 350px;
min-height: 8vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
display: flex;
//자식 요소에 접근하는법
//자식 요소 모두 선택
& > * {
  padding : 5px;
}
//자식 중 인풋에게
& input {
  border: 1px solid #888;
  width: 70%;
  margin-right: 10px
}

& input:focus {
  outline: none;
  border: 1px solid #a673ff;
}

& button {
  width: 25%;
  color: #fff;
  border: #a673ff;
  background: #a673ff;
}
`;

const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default App;