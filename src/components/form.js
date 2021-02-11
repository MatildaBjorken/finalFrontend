import React, { useState, useEffect } from "react"

const urlCreate = "http://localhost:8090/api/createArticle.php"

export default function ShowForm(props){
    const [alert, setAlert] = useState(false);
    async function postData(e){
        e.preventDefault()
       
        let title = e.target.children[0].value
        let body = e.target.children[1].value
     
        let data = JSON.stringify({title:title, body: body})
        let addedArticle = await fetch(urlCreate, {
            method:'POST', body:data, headers: { 'Content-Type': 'application/json' },
            
    
    })  .then(() => {
        
        setAlert(true);
      })
   
    window.location.reload(false);
    addedArticle= await addedArticle.json()
    props.toggleForm()
    props.updateArticle(addedArticle)
    data.innerText = "Hello World";
   
    }

    return  (
        <>
     {alert && <h2> Submit Successful</h2>}

            <form className='addPostBtn ' onSubmit={ e=> postData(e)}>

                <input type='text' placeholder="TITLE.."/>
                <textarea maxLength='350' rows="2" cols="50" placeholder="BODY TEXT.."></textarea>

                <button type="submit" className='submitBtn'>SUBMIT</button>
                <button type="button" onClick={props.toggleForm}>CANCEL</button>
            </form>
            </>
    )
}