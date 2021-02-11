import React, { useState, useEffect } from "react"
import PostBtn from './postBtn'
import ListOfPost from './listOfPost'
import Nav from './nav'


import Pen from '../images/arrow/pen2.png'


const url = "http://localhost:8090/api/articles.php"

export default function Dashboard(props){

   
    const [articles, setPosts] = useState([])



    async function fetchData() {
      const data = await fetch(url, { method: "GET" }).then(data => data.json())
      setPosts(data.articles)
      console.log(data.articles)
    }

    function updateArticle(addedArticle){
      setPosts(article=>article.concat(addedArticle))
    

    }  


    useEffect(() => {
      fetchData()
    }, [])

   
    return (
    <>
   
    <Nav articles={articles} />

    <div className='arrowDiv'>
    <img className='pen' src={Pen}/>
    </div>

    
    <PostBtn updateArticle={updateArticle} />
    
    <ListOfPost articles={articles} />
  
                

    </>
    )
}