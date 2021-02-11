import React, { useState, useEffect } from "react"
import UpdatePost from "./edit"
import UpdatePostForm from './editForm'



export default function (props){

    const [openForm, setOpenForm] = useState(false)

    function toggleForm(){
        setOpenForm(!openForm)
    }



    if (openForm){
        return<UpdatePost toggleForm={toggleForm} />
    } else{
        return  <button  onClick={toggleForm} >edit</button>

    }

}