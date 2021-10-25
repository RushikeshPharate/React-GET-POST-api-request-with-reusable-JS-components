
import Post from './Post';
import classes from './PostsList.module.css'

function PostsList(props){

    return(
        <>
        <div>
            <ul className={classes['posts-list']}>
                {props.posts.map((postData)=>(
                    
                    <Post content={postData.post_content}/>
                ))}
            </ul>
        </div>
        </>
    );

};

export default PostsList
