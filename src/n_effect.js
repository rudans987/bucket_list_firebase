import Button from "./n_button";
import {useState, useEffect} from "react";


function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev)=> prev+1);
  const onChange = (event) => setKeyword(event.target.value)
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once")
  };
//   useEffect안의 함수는 처음 오직 한번만 렌더링되게 보호한다.
  useEffect(iRunOnlyOnce, []);
//   인풋의 키워드가 변할때만 그리고 키워드길이가 5보다 많아지면 아래코드가 실행되게 하기
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5)
    console.log("I run when 'keyword' chasges.");
  }, [keyword]);
//   counter가 변할때만 아래코드가 실행되게 하기
  useEffect(()=>{
    console.log("I run when 'counter' chasges.");
  }, [counter]);
//   키워드나 카운터가  변할때 실행되게 하기
  useEffect(()=>{
    console.log("I run when keyword & counter chasges.");
  }, [keyword, counter]);
  return (
    <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here"/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text={"continue"} />
    </div>
  )
};

export default App; 