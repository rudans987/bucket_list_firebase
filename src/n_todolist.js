import { useState } from "react";

function App() {
    const [toDo, setTodo] =useState("");
    const [toDos, setTodos] = useState([]);
    const onChange =(event)=> setTodo(event.target.value);
    const onSubmit = (event) =>{
        event.preventDefault();
        if(toDo ===""){
            return; 
        }
        setTodo("")
        setTodos(currentArray =>[...currentArray, toDo])
    }
    return (
    <div>
        <h1>My To dos</h1>
        <form onSubmit={onSubmit}>
            <input 
            onChange={onChange} 
            value={toDo} 
            type="text" 
            placeholder="write your to do"/>
            <button>Add todo</button>
        </form>
        <hr/>
        <ul>
        {toDos.map((item, index) => 
        <li key={index}>{item}</li> )}
        </ul>
        
    </div>
    );
}

export default App;