import classes from './Post.module.css'

function Post(props){

    return(
        <div>
            <li className={classes.post} key={'props.content'}>
                {props.content}
            </li>
        </div>
    );
}

export default Post;