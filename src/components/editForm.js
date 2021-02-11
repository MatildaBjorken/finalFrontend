


export default function UpdatePostForm(id){
    async function UpdatePostForm(id) {
       
        console.log(id)
     
        await fetch(`http://localhost:8090/api/single_articles.php?id=${id}`, 
        { method: 'GET' 
    }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
            })
        })

    }
  
    UpdatePostForm(id)
    

}