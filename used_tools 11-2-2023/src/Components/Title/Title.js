import classes from './Title.module.css'

function Title(props){
    return(
        <div>
            <h2 className={classes.h2}>{props.text}</h2>
        </div>
    );
}
export default Title;