import axios from "axios"

const getAllItems=(setShop)=>{
    axios.get("http://localhost:8000")
    .then(({data})=>{console.log(data)
        setShop(data)
    })
}
const addItem=(title,setTitle,setShop)=>{
    axios.post(`http://localhost:8000/saveShop`, {title})
    .then ((data)=>{
        console.log(data)
        setTitle("")
        getAllItems(setShop)
    })
}
const editItem=(itemID,title,setShop, setTitle,setEditing)=>{
    axios.post(`http://localhost:8000/editShop`, {_id:itemID,title})
    .then ((data)=>{
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllItems(setShop)
    })
}
const deleteItem=(_id,setShop)=>{
    axios.post(`http://localhost:8000/deleteShop`, {_id})
    .then ((data)=>{
        console.log(data)
        getAllItems(setShop)
    })
}

export {getAllItems,addItem,editItem,deleteItem};