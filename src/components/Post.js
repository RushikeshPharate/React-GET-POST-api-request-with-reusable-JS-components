import classes from './Post.module.css'

function Post(props){

    return(
        <div>
            <li className={classes.post}>
                <p>{props.content}</p>
            </li>
        </div>
    );
}

export default Post;