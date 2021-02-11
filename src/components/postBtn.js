import React, { useState, useEffect } from "react"
import ShowForm from "./form"

export default function PostBtn(props){

    const [openForm, setOpenForm] = useState(false)

    function toggleForm(){
        setOpenForm(!openForm)
    }

    if (openForm){
        return<ShowForm toggleForm={toggleForm} updateArticle={props.updateArticle}/>
    } else{
        return <div className='addPostBtn'><button  onClick={toggleForm}>add post</button></div>

    }

}