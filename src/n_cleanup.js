import { useEffect, useState } from "react";

function Hello() {
    
    useEffect(()=> {
        // hello component가 생성될때마다 콘솔에 찍힌다.
        console.log("created");
        // hello component가 없어질때마다 콘솔에 찍힌다.
        return () => console.log("destroyed");
    }, [])
    return <h1>Hello</h1>
}



function Hello() {
    function byeFn() {
        console.log("bye")
    }
    function hiFn() {
        console.log("created");
        return byeFn;
    }
    useEffect(hiFn, []);
    return <h1>Hello</h1>
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev)
    return <div>
        {showing ? <Hello/> : null}
        <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
    </div>
}