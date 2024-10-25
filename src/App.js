import React, { useState } from 'react'; 
import './App.css';
import Todo from './component/Todo';
import Todolist from './component/Todolist';

function App() {
  const [listTodo, setListTodo] = useState([]); 

  const addList = (inputText) => {
    if (inputText.trim()) { 
      setListTodo([...listTodo, inputText]);
    }
  };
  const deletelistItem =(key)=>{
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key,1)
    setListTodo([...newlistTodo])
  }

  return (
    <div className='main-container'>
      <div className='center-container'>
        <Todo addList={addList} />
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            <Todolist key={i} index= {i} item={listItem} deleteItem={deletelistItem}/>
          )
        })}

        

        
      </div>
    </div>
  );
}

export default App;
