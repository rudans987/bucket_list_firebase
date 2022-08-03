
// 리렌더링을 자주해줘야하는 방식
import React from 'react'; 
const root = document.getElementById("root")
// 버튼에 온클릭 함수 넣는법
let counter = 0;
function countup() {
    counter = counter +1;
    render();
    // 리렌더링 시키지 않으면 버튼을 눌러도 카운터는 0으로 계속 보여진다.
}
function render() {
    ReactDOM.render(<Container/>,root)
}

const Container = () => (
    <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick={countup}>Click me</button>
    </div>
);

render();


// state를 쓰는 방식

function App() {
    let [counter, setCounter] =React.useState(0);
    const onClick = () => {
        // setCounter함수는 값을 바꾸고 자동으로 리렌더링해준다.
        setCounter(counter+1) 
        // setCounter((current)=> current+1);
    }
    return(
        <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick={onClick}>Click me</button>
    </div>
    )
}

ReactDOM.render(<App/>,root)