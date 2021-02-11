import React, { useState, useEffect } from "react"
import DeletePost from "./delete"
import UpdatePostForm from './editForm'
import EditBtn from './editBtn'
import EditPost from './editApi'


const url = "http://localhost:8090/api/articles.php"

export default function ListOfPost(props){
    const [openForm, setOpenForm] = useState(false)

    const[visible, setVisible] = useState(3)
   const [articles, setPosts] = useState([])

  

    async function fetchData() {
      const data = await fetch(url, { method: "GET" }).then(data => data.json())
      setPosts(data.articles)
      console.log(data.articles)
    }

    //const[title, setTitle] = useState('')
 

    const showMoreItems = () => {
        setVisible((prevValue)=> prevValue +3)

        
      }
  

    /*
     async function getPost(id){
        await fetch(`http://localhost:8090/api/single_articles.php?id=${id}`, 
        { method: 'GET' 
    }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                displayForm(resp)
            })
        })
      }
      */

    
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
        console.log('skickad')
       
        }
    

      
    return  (
        
        
        <div className='Post'>

            
    <ul className='ulPost '>
        {props.articles.slice(0,visible).map(articles=>{
            
            return(
                
                <>
  
                <li className='listOfPosts container'>
                <div className="row">
    <div className="column left">
      <span className="dot dot1" ></span>
      <span className="dot dot2" ></span>
      <span className="dot dot3" ></span>
    </div>
    <div className="column middle">

    </div>
   
  </div>
            <h2 className='InsidePost'>{articles.title}</h2>
            <h4 className='InsidePost'>{articles.created_at}</h4>
            <p className='InsidePost'>{articles.body}</p>
                <button  onClick={(e)=>DeletePost(articles.id)} >delete</button>
              
              

                <form className='editForm' onSubmit={(e)=>EditPost(e, articles.id)} >
              
              <input type='text'  defaultValue={articles.title} / >
              <textarea  rows="4" cols="50"  >{articles.body}</textarea>
              <button type="submit" className='editBtn'>EDIT</button>
          
          </form>

              

                </li>
               
            </>
            )
            
        })}

    </ul>
    <div>
    <button className='loadMore' onClick={showMoreItems}>load more</button>
    </div>
    </div>
    
    )
    
}