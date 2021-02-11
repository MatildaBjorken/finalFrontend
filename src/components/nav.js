import React, { useState, useEffect } from "react"
import { Link } from "gatsby"


export default function Nav(){
    return(
        <> 
            <nav>
               
                    <li>
                    
            <Link to="http://localhost:8000"><button className='navBtn'>
              HOME 
            </button>
            </Link>
            <Link to="/admin"><button className='navBtn'>
              ADMIN 
            </button>
            </Link>
           
                    </li>
                
            </nav>
        
        </>
    )
}