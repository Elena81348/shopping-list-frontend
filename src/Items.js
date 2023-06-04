import {AiFillEdit,AiFillDelete} from "react-icons/ai"
export const MyItems=({text, updatingInput,deleteItem})=>{
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInput}></AiFillEdit>
            <AiFillDelete onClick={deleteItem}></AiFillDelete>
        </div>
    )
}