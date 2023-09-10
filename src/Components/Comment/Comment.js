import classes from './Comment.module.css';

function Comment(){
    return(
        <div>
            <div class={classes.name}>
                <img src='Images/me.jpg' alt='pic' class={classes.img}/>
                <span class={classes.span}>Anas Attoum </span><span class={classes.date}> just now</span><br/>
                <small>nice</small>
            </div>
        </div>
    );
}
export default Comment;