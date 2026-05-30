import {useState} from "react";
import {v4 as uuidv4} from "uuid";

// in react, when handling array in states, always use: 
// for adding : [...arr , newEle]  , spread opr
// for deleting : filter method 
// for rendering : map method 

export default function TodoList() {
    let [todos , setTodos] = useState([]);
    let [newTodo , setNewTodo] = useState("");

    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }

    let addTodo = () => {
        if(newTodo.trim()) {
            setTodos((prevTodos) => {
                return [...prevTodos , {task: newTodo.trim() , id: uuidv4() , isDone: false}];
            });
            setNewTodo("");
        }
    }

    let deleteTodo = (id) => {
        // console.log(newTodo);
        setTodos((prevTodos) => prevTodos.filter((task) => task.id != id));
    }

    let markasDone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo , 
                    isDone: true,
                };
            } else {
                return todo;
            }
        }));
    }

    return (
        <div>
            <p>To do list</p>
            <input type="text" placeholder="add a task" onChange={updateTodo} value={newTodo}/>
            <button onClick={addTodo}>Add task</button>
            <br /><br /><br /><br />

            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((task) => (// if we use () : implict return , if {} used, need to explicitly write return keyword
                        <li key={task.id}>
                            <span style={{textDecoration: (task.isDone? "Line-Through" : "none")}}>{task.task}</span> &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(task.id)}>delete</button> &nbsp;&nbsp;
                            <button onClick={() => markasDone(task.id)}>mark as Done</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
