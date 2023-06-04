
import { useEffect, useState } from 'react';
import{getAllItems,addItem, editItem,deleteItem} from './FetchItems'

import './App.css';
import { MyItems } from './Items';

function App() {
const[myShop, setShop]=useState([]);
const [title,setTitle]=useState("");
const [editing,setEditing]=useState(false);
const[itemID,setItemId]=useState("")

useEffect(()=>{
  getAllItems(setShop)
}, [])
const updatingInput=(_id,title)=>{
  setEditing(true)
  setTitle(title)
  setItemId(_id)
}

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <input
      type="text"
      placeholder="Add a purchase"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
    <button disabled={!title} onClick={editing?()=>editItem(itemID,title,setShop, setTitle,setEditing)
    :()=>addItem(title,setTitle,setShop)}> {editing?"Edit":"Add"}</button>
    {myShop.map((item)=><MyItems text={item.title} key={item._id}
    updatingInput={()=>updatingInput(item._id,item.title)}
    deleteItem={()=>deleteItem(item._id,setShop)}
    />

    )}

    </div>
  );
}

export default App;
