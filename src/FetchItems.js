import axios from "axios"

const getAllItems=(setShop)=>{
    axios.get("https://shopping-list-backend-pp9i.onrender.com")
    .then(({data})=>{console.log(data)
        setShop(data)
    })
}
const addItem=(title,setTitle,setShop)=>{
    axios.post(`https://shopping-list-backend-pp9i.onrender.com/saveShop`, {title})
    .then ((data)=>{
        console.log(data)
        setTitle("")
        getAllItems(setShop)
    })
}
const editItem=(itemID,title,setShop, setTitle,setEditing)=>{
    axios.post(`https://shopping-list-backend-pp9i.onrender.com/editShop`, {_id:itemID,title})
    .then ((data)=>{
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllItems(setShop)
    })
}
const deleteItem=(_id,setShop)=>{
    axios.post(`https://shopping-list-backend-pp9i.onrender.com/deleteShop`, {_id})
    .then ((data)=>{
        console.log(data)
        getAllItems(setShop)
    })
}

export {getAllItems,addItem,editItem,deleteItem};