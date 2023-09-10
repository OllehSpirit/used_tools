import Comment from '../../../Components/Comment/Comment';
import CardMini from './CardMini/CardMini';
import classes from './MiniAuthorProfile.module.css';

function MiniAuthorProfile(props){
    
    return(
    <div id='miniAuthorProfile'>
        {/* <div class="cards"> */}
            <div class={classes.card}>
                <div class={classes.card_header}>
                    <span>
                        <i class="fas fa-user"></i>
                        <small>1,234</small>
                    </span>
                    <a href="#follow"> Follow</a>
                </div>  
                
                <div class={classes.name}>
                    <h4>Anas Attoum</h4>
                    <small> Male &nbsp;&&nbsp; Age 22</small>
                </div>

                <div class={classes.card_img}>
                    <img src="Images/Me.jpg" alt="profile"/>
                </div>
            </div>

            <div class={classes.card_body}>
                <p> Contacts info: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating</p>
                <span class={classes.email}>Email:</span><span class={classes.email2}>AnasAttoum.12321@gmail.com</span>
                <span class={classes.phone}>Phone Number:</span><span class={classes.phone2}>None Yet</span>
            </div>
            
            {/* <h1 class={classes.initials}>MS</h1> */}
            <a href="#message" class={classes.btn}>
                <small>Message </small>
                <i class="fas fa-arrow-right"></i>
            </a>
            
        {/* </div> */}
        <div class={classes.lastProdTxt}>
            <p className={classes.tit}>Last 3 available products for AnasAttoum</p>
            <CardMini/>
            <CardMini/>
            <CardMini/>
        </div>
        

        <div>
            <div class={classes.mid}>
                <div class={classes.card_header2}>
                    Comments
                </div>
                <div class={classes.comments}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
                <input type="text" placeholder="   Add Comment" className={classes.addCommentBox} required/>
                <button className={classes.addCommentBtn}><i class="fa fa-paper-plane" style={{marginLeft:'-3px'}}></i></button>
            </div>
        </div>

    </div>
    );
}
export default MiniAuthorProfile;