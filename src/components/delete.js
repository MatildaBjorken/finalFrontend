import React, { useState, useEffect } from "react"

//const urlDelete = "http://localhost:8090/api/deleteArticles.php"

export default function DeletePost(id){
 
            async function DeletePost() {
               
            alert('its deletedddddd')
            
                await fetch(`http://localhost:8090/api/deleteArticle.php?id=${id}`, 
                { method: 'DELETE' 
            }).then((result)=>{
                    result.json().then((resp)=>{
                        console.warn(resp)
                        console.log('deleted')
                        
   
                        
                    })
                })

            }
            window.location.reload(false);
            DeletePost(id);

          

        // DELETE request using fetch with async/await
        
 
}
