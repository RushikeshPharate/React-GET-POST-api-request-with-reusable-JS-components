import React from 'react'

import './App.css';
import { useState } from 'react'
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';


function App() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    async function fetchPostsHandler(){
      setIsLoading(true);
      const response = await fetch("http://127.0.0.1:8000/posts");
      const data = await response.json();
      setPosts(data);
      setIsLoading(false)
    }

  /* 
    const [loading, setloading] = useState(true)
    function fetchPostsHandler(){

      // fetch retirn a promice that means it wont immedietly return response. Thus we have used then() to respond to the response whenits received.
      fetch("http://127.0.0.1:8000/posts").then((response) => {

        return response.json();  // this converts the JSON file received into JavaScript Object
        // response.json() itself return a promise and we have to handle that using then()
        
      }).then((data) =>{
        setPosts(data);
        console.log(posts);
      }).catch((err)=>{
        console.log(err);
      });

    }
  */

  return (

    <div className="App">
      <React.Fragment>
        <section>
          <h1>Hello World</h1>
          <br/>
          <CreatePost/>
          <br/>
          <button onClick={fetchPostsHandler}>Get Data</button>
        </section>
        <section>
          {isLoading && <p>Loading....</p>}
          {!isLoading && < PostsList posts={posts}/>}
          
        </section>
        <br/>
        
      </React.Fragment>
    </div>
  );
}

export default App;



