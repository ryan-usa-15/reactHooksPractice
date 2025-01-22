import logo from './logo.svg';
import './App.css';

import Products from './Products';

import Rating from './Rating';

import 'bootstrap/dist/css/bootstrap.min.css'

import { Button } from 'react-bootstrap';

import JumbotronComponent from './JumbotronComponent';
import GitHub from './GitHub';
import UserForm from './UserForm';
import ToDoList from './ToDoList';

import {UserContext} from './index'
import React, {useContext, useReducer} from 'react';

import {v4 as uuidv4} from 'uuid';


const todosInitialState ={
    todos:[
//        {id:1,text: "finishing writing hooks chapter"},
 //       {id:2, text:"play with kids"},
   //     {id: 3, text:"read bible"}


    ]

};

function todosReducer(state, action){
    switch(action.type){
        case 'get':
            return {...state, todos:action.payload}
        case 'add':
           // const newToDo = {id: uuidv4(), text: action.payload}
            const addedToDos = [...state.todos, action.payload]
            return {...state, todos:addedToDos}
        case 'delete':
            const filteredTodoState = state.todos.filter(
                todo => todo.id !== action.payload.id
            )
            return {...state, todos:filteredTodoState}
        case 'edit':
            const updatedToDo={...action.payload}
            const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
            const updatedToDos = [
                ...state.todos.slice(0, updatedToDoIndex),
                updatedToDo,
                ...state.todos.slice(updatedToDoIndex + 1 )
            ];
            return {...state, todos: updatedToDos}
        default: 
            return todosInitialState
    }
}

export const TodosContext = React.createContext()

function AppTwo() {

    const[state, dispatch] = useReducer(todosReducer, todosInitialState)

    return(
        <TodosContext.Provider 
            value={{state,dispatch}}>
                <ToDoList />
        </TodosContext.Provider>

    )

    /*
    const initialState={
        count: 0
    }
    function reducer(state,action){
        switch(action.type){
            case "increment":
                return {count: state.count + 1}
            case "decrement":
                return {count: state.count - 1}
            case "reset":
                return initialState
            default:
                return initialState
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const {username, dragon} = useContext(UserContext)




  return (
    <div>
      wine and cheese
      <br/>
        Count: {state.count}
      <br/>
        <Button onClick={() => dispatch({type:'increment'})}>
            Increment
        </Button>
        <Button variant="secondary" onClick={()=>dispatch({type:'decrement'})}>
            Decrement
        </Button>
        <Button variant="success" onClick={()=> dispatch({type: 'reset'})}>
            Reset
        </Button>
      <br/>
      Received: {username}
      <br/>
      Dragon ID: {dragon} 
    </div>
  );
  */
}

export default AppTwo;





