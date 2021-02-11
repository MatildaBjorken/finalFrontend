import React, { useState, useEffect } from "react"

const urlCreate = "http://localhost:8090/api/createArticle.php"

export default function ShowForm(props){


    const [articles, setPosts] = useState([])

  
const url = "http://localhost:8090/api/articles.php"

    async function fetchData() {
      const data = await fetch(url, { method: "GET" }).then(data => data.json())
      setPosts(data.articles)
      console.log(data.articles)
    }


    async function EditPost(e, id){
       
        e.preventDefault()
   
    let title = e.target.children[0].value
    let body = e.target.children[1].value
      
    let data = JSON.stringify({title:title, body: body, id:id})
        let addedArticle = await fetch('http://localhost:8090/api/updateArticle.php', {
            method:'PUT', body:data, headers: { 'Content-Type': 'application/json' },
            
    
    })  
  
    addedArticle= await addedArticle.json()
    
window.location.reload(false);
  
   
    }


       
    return  (
        
       
            
       
                <>

   
  
                <form className='editForm' onSubmit={(e)=>EditPost(e, articles.id)} >
              
              <input type='text'  defaultValue={articles.title} / >
              <textarea  rows="4" cols="50"  >{articles.body}</textarea>
              <button type="submit" className='editBtn'>SUBMIT</button>
              <button type="button" className='editBtn' onClick={props.toggleForm}>CANCEL</button>
          </form>

              

            </>
            )
        
}