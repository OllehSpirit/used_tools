import classes from './GlassCard.module.css'

function GlassCard(props){
    return(
        <div style={{display:'inline-block'}}>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.card}>
                <h2 className={classes.header}>{props.header}</h2>
                <p className={classes.text}>{props.text}</p>
                <img alt='Services' src={props.source} className={classes.img}/>
            </div>
        </div>
    );
}
export default GlassCard;