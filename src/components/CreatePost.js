import classes from './CreatePost.module.css'

import {useRef} from 'react'

function CreatePost(){

    const contentTextRef = useRef('')

    async function createPostHandler(){
        const response = await fetch("http://127.0.0.1:8000/posts/",{
            method: 'POST',
            body: JSON.stringify({
                "created_by":1,
                "post_content":contentTextRef.current.value
            }),
            headers:{
                'Content-Type':'application/json'
            }
        });
    }

    return(
        <>
        <div>
            <input type='text' ref={contentTextRef}/>
            <button onClick={createPostHandler}>Post Data</button>
        </div>
        </>
    )

}

export default CreatePost;



