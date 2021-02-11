import React, { useState, useEffect } from "react"
import Nav from '../components/nav'
import "../components/layout.css"
import Arrow from '../images/arrow/arrow.png'
import News from '../images/arrow/news.png'
import Truncate from 'react-truncate';
//useState hook to create some local state to hold posts and a setPosts function to update this state. default it to an empty array.
// useState allows our functional components which used to be stateless become stateful. 

const url = "http://localhost:8090/api/articles.php"

export default function Home() {
  const [articles, setArticles] = useState([])
  const [expanded, setExpanded] = useState([])

  const toggleExpanded = (e, id) => {
    if (expanded.includes(id)) setExpanded(expanded.filter(x => x !== id))
    else setExpanded(expanded.concat(id))
  }

  //The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

  //get all data 
  async function fetchData() {
    const data = await fetch(url, { method: "GET" }).then(data => data.json())
    setArticles(data.articles)
    console.log(data.articles)
  }

  //To get the posts from the Api use the useEffect hook to run when our component gets mounted

  useEffect(() => {
    fetchData()
  }, [])
  //onMount, the array never change, only when they change
  //empty array - when the DOM is changed - mounting
  const GoTop = (props) => {

    const [intervalId, setIntervalId] = React.useState(0);
    const [thePosition, setThePosition] = React.useState(false);
    
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
        // window.scrollTo(0, 0);
    }, [])
    
    const onScrollStep = () => {

        if (window.pageYOffset === 0){
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - props.scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
    }

    const renderGoTopIcon = () => {
        return (
            <button className={`go-top ${thePosition ? 'active' : ''}`} onClick={scrollToTop}>
                TOP
            </button>
        )
    }

    return (
        <React.Fragment>
            {renderGoTopIcon()}
            
        </React.Fragment>
    )
}


  //render the posts
  return (
    <>
    <main className='Post'>
      <Nav articles={articles} />
      <h1>read me read me read me</h1>
      <div className='newsDiv'>
    <img className='news' src={News}/>
    </div>


      {articles.map(article => (
        <article className='container article'>
           <div className="row">
      <div className="column left">
        <span className="dot dot1" ></span>
        <span className="dot dot2" ></span>
        <span className="dot dot3" ></span>
     </div>

    <div className="column middle">
    </div>
   
  </div>
  
          <h2>{article.title}</h2>
          <h4>{article.created_at}</h4>

          {expanded.includes(+article.id) && <><p>{article.body}</p><span className='readMore' onClick={e => toggleExpanded(e, +article.id)}>Read less</span>  </>}

          {!expanded.includes(+article.id) && <Truncate lines={2} ellipsis={<span className='readMore' onClick={e => toggleExpanded(e, +article.id)}>...Read more</span>}>
           <p>{article.body}</p>
          </Truncate>}

          
        </article>
        
      ))}
    </main>
 

    <div className='arrowDiv'>
    <img className='arrow' src={Arrow}/>
    </div>

    <div className='arrowDiv'>
    <GoTop scrollStepInPx="100" delayInMs="20.50"/> 
    </div>
    </>
  )
}