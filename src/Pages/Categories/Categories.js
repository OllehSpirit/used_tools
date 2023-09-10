import { useEffect } from "react";

import Card from "../../Components/Card/Card";
import MainNavigation from "../../Components/MainNavigation/MainNavigation";
import SideBar from "../../Components/SideBar/SideBar";
import Welcome from "../../Components/Welcome/Welcome";
import Author from "../Profile/Auhor Profile/Author";
import classes from './Categories.module.css'
import Footer from '../../Components/Footer/Footer'
import CardCategories from "../../Components/Card Categories/CardCategories";
import MiniProductDetails from "../Product Details/MiniProductDetails/MiniProductDetails";

export var a3=0;
export function resetAClose(){
    // console.log('Done')
    a3=-0;
    
}
export function resetAOpen(){
    // console.log('Done')
    a3=0;

}
function Categories(){
    

    useEffect(()=>{
        document.getElementById("transLeft").style.visibility='hidden';
    })


    
    function translateCardsRight(){
        a3-=500;
  
        const card = document.getElementById("cards3");  
        document.getElementById("transLeft").style.visibility='visible';
        if(a3>=-1000){
            card.style.transform = `translate(${a3}px)`;
            card.style.transitionDuration = '1s';
            
            if(a3===-1000){
                document.getElementById("trans").style.visibility='hidden';
            }
        }
    }

    function translateCardsLeft(){
        a3+=500;
        const card = document.getElementById("cards3");  
        document.getElementById("trans").style.visibility='visible';
        if(a3<=0){
            card.style.transform = `translate(${a3}px)`;
            card.style.transitionDuration = '1s';

            if(a3===0){
                document.getElementById("transLeft").style.visibility='hidden';
            }
        }
    }

    return(
        <div>
            <Welcome/>
            <MainNavigation/>

            <br/><br/><br/><br/>
            <h2 className={classes.h2} id='title'> C a t e g o r i e s</h2><br/>
            <CardCategories/>

            <button onClick={translateCardsRight} id='trans' className={classes.btnRight}><i className="bx bx-chevron-right"></i></button>
            <button onClick={translateCardsLeft} id='transLeft' className={classes.btnLeft}><i className="bx bx-chevron-left"></i></button>
            
            <h2 className={classes.h2} id='title'> D o n a t e</h2><br/>
            <a href="SeeAllStores" className={classes.a}>SEE ALL {'>>'}</a>
            <div style={{display:'flex',position:"relative",left:'-150px'}} id='cards3'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <Author/>
            <MiniProductDetails/>
            <SideBar/>
            <Footer/>
        </div>
    );
}
export default Categories;