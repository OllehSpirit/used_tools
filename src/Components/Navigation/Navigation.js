import classes from './Navigation.module.css';

function Navigation(){
    return(
        <div className={classes.mainNav}>
            <img src='Images/Logo.png' alt='Logo' className={classes.img}/>
            <a href="#home" className={classes.nav}>H O M E</a>
            <a href="#features" className={classes.nav}>F E A T U R E S</a>
            <a href="#products" className={classes.nav}>P R O D U C T S</a>
            <a href="#contactUs" className={classes.nav}>C O N T A C T &nbsp; U S</a>
        </div>
    );
}
export default Navigation;