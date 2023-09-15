import { useEffect } from 'react'
import {a , a2} from '../../Pages/Main/Main'
import {a3} from '../../Pages/Categories/Categories'
import'./SideBar.css'

function SideBar(){
    useEffect(()=>{
        var ab = document.querySelector(".a")
        ab.classList.add('active')


        var wrapper = document.querySelector(".close")
        var toggle = document.querySelector(".toggle")
        // var hamburger = document.querySelector(".hamburger");
        // hamburger.addEventListener("click", function(){
        // 	document.querySelector("body").classList.toggle("active");
        // })

        // START WITH CLOSE SIDE BAR
        // wrapper.classList.remove("close");
        toggle.addEventListener("click" , () =>{
            // console.log(wrapper.classList[1])
        wrapper.classList.toggle("close");

        
        if(wrapper.classList[1]==='close'){
            // resetAClose();
            if(document.getElementById("cardCategories")!=null){
                const cardCategories = document.getElementById("cardCategories");
                cardCategories.style.transform = `translate(0px)`;
                cardCategories.style.transitionDuration = '0.5s';
            }
            if(document.getElementById("cards")!=null){
                const card = document.getElementById("cards");  
                card.style.transform = `translate(${a}px)`;
                card.style.transitionDuration = '1s';
            }
            if(document.getElementById("cards3")!=null){
                const card = document.getElementById("cards3");  
                card.style.transform = `translate(${a3}px)`;
                card.style.transitionDuration = '1s';
            }
            if(document.getElementById("cards2")!=null){
                const card2 = document.getElementById("cards2");  
                card2.style.transform = `translate(${a2}px)`;
                card2.style.transitionDuration = '1s';
            }
            if(document.getElementById("transLeft")!=null){
                const transLeft = document.getElementById("transLeft");
                transLeft.style.transform = `translate(0px)`;
                transLeft.style.transitionDuration = '1s';
            }
            if(document.getElementById("transLeft2")!=null){
                const transLeft2 = document.getElementById("transLeft2");
                transLeft2.style.transform = `translate(0px)`;
                transLeft2.style.transitionDuration = '1s';
            }
            // document.getElementById("transLeft").style.visibility='hidden'; 
            // document.getElementById("trans").style.visibility='visible'; 

            // const title = document.getElementById("title");
            // title.style.transform = `translate(-150px)`;
            // title.style.transitionDuration = '1s';
        }
        else{
            // resetAOpen();
            // console.log(a)
            if(document.getElementById("cardCategories")!=null){
                const cardCategories = document.getElementById("cardCategories");
                cardCategories.style.transform = `translate(27px)`;
                cardCategories.style.transitionDuration = '0.5s';
            }

            if(document.getElementById("cards")!=null){
                const card = document.getElementById("cards");  
                card.style.transform = `translate(${a+70}px)`;
                card.style.transitionDuration = '1s';
            }
            if(document.getElementById("cards2")!=null){
                const card2 = document.getElementById("cards2"); 
                card2.style.transform = `translate(${a2+70}px)`;
                card2.style.transitionDuration = '1s';
            }
            if(document.getElementById("cards3")!=null){
                const card = document.getElementById("cards3");  
                card.style.transform = `translate(${a3+70}px)`;
                card.style.transitionDuration = '1s';
            }

            if(document.getElementById("transLeft")!=null){
                const transLeft = document.getElementById("transLeft");
                transLeft.style.transform = `translate(70px)`;
                transLeft.style.transitionDuration = '0.5s';
            }
            // document.getElementById("transLeft").style.visibility='hidden'; 
            // document.getElementById("trans").style.visibility='visible'; 
            if(document.getElementById("transLeft2")!=null){
                const transLeft2 = document.getElementById("transLeft2");
                transLeft2.style.transform = `translate(70px)`;
                transLeft2.style.transitionDuration = '0.5s';
            }

            
            // document.getElementById("transLeft2").style.visibility='hidden'; 
            // document.getElementById("trans2").style.visibility='visible';
            
            // const title = document.getElementById("title");
            // title.style.transform = `translate(0px)`;
            // title.style.transitionDuration = '1s';
            // console.log(aa)

            // margin(200);
            // console.log(aa)
        }
    })
    
    
    })
    function toggleList1(){
        var a = document.querySelector(".a")
        a.classList.add('active')

        var b = document.querySelector(".b")
        b.classList.remove('active')
        var c = document.querySelector(".c")
        c.classList.remove('active')
        var d = document.querySelector(".d")
        d.classList.remove('active')
        var e = document.querySelector(".e")
        e.classList.remove('active')
        var f = document.querySelector(".f")
        f.classList.remove('active')
        var g = document.querySelector(".g")
        g.classList.remove('active')
    }

    function toggleList2(){
        var b = document.querySelector(".b")
        b.classList.add('active')

        var a = document.querySelector(".a")
        a.classList.remove('active')
        var c = document.querySelector(".c")
        c.classList.remove('active')
        var d = document.querySelector(".d")
        d.classList.remove('active')
        var e = document.querySelector(".e")
        e.classList.remove('active')
        var f = document.querySelector(".f")
        f.classList.remove('active')
        var g = document.querySelector(".g")
        g.classList.remove('active')
    }

    function toggleList3(){
        var c = document.querySelector(".c")
        c.classList.add('active')
        
        var a = document.querySelector(".a")
        a.classList.remove('active')
        var b = document.querySelector(".b")
        b.classList.remove('active')
        var d = document.querySelector(".d")
        d.classList.remove('active')
        var e = document.querySelector(".e")
        e.classList.remove('active')
        var f = document.querySelector(".f")
        f.classList.remove('active')
        var g = document.querySelector(".g")
        g.classList.remove('active')
    }

    // function toggleList4(){
    //     var d = document.querySelector(".d")
    //     d.classList.add('active')
        
    //     var a = document.querySelector(".a")
    //     a.classList.remove('active')
    //     var b = document.querySelector(".b")
    //     b.classList.remove('active')
    //     var c = document.querySelector(".c")
    //     c.classList.remove('active')
    //     var e = document.querySelector(".e")
    //     e.classList.remove('active')
    //     var f = document.querySelector(".f")
    //     f.classList.remove('active')
    //     var g = document.querySelector(".g")
    //     g.classList.remove('active')
    // }

    function toggleList5(){
        var e = document.querySelector(".e")
        e.classList.add('active')
        
        var a = document.querySelector(".a")
        a.classList.remove('active')
        var b = document.querySelector(".b")
        b.classList.remove('active')
        var c = document.querySelector(".c")
        c.classList.remove('active')
        var d = document.querySelector(".d")
        d.classList.remove('active')
        var f = document.querySelector(".f")
        f.classList.remove('active')
        var g = document.querySelector(".g")
        g.classList.remove('active')
    }

    function toggleList6(){
        var f = document.querySelector(".f")
        f.classList.add('active')
        
        var a = document.querySelector(".a")
        a.classList.remove('active')
        var b = document.querySelector(".b")
        b.classList.remove('active')
        var c = document.querySelector(".c")
        c.classList.remove('active')
        var d = document.querySelector(".d")
        d.classList.remove('active')
        var e = document.querySelector(".e")
        e.classList.remove('active')
        var g = document.querySelector(".g")
        g.classList.remove('active')
    }

    function toggleList7(){
        var g = document.querySelector(".g")
        g.classList.add('active')
        
        var a = document.querySelector(".a")
        a.classList.remove('active')
        var b = document.querySelector(".b")
        b.classList.remove('active')
        var c = document.querySelector(".c")
        c.classList.remove('active')
        var d = document.querySelector(".d")
        d.classList.remove('active')
        var e = document.querySelector(".e")
        e.classList.remove('active')
        var f = document.querySelector(".f")
        f.classList.remove('active')
        
    }
    
    
    return(
        <div>
            <div className={`wrapper close`}>
            <div className={`section`}>
                {/* <div class="top_navbar">
                    <div class="hamburger">
                        <a href="#">
                            <i class="fas fa-bars"></i>
                        </a>
                    </div>
                </div> */}
                <i className={`bx bx-chevron-right toggle`} ></i>

            </div>
            <div className={`sidebar`}>
                <div className={`profile`}>
                    {/* <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture"/> */}
                    <img src="Images/Me.jpg" alt="profile_picture"/>
                    <h3 className={`text`}>AnasAttoum</h3>
                    {/* <p class="text">Designer</p> */}
                </div>
                
                <ul>
                {/* <li class="search-box"> */}
                    {/* <i class='bx bx-search icon'></i> */}
                    {/* <input type="text" placeholder="Search..."/> */}
                {/* </li> */}
                    <li>
                        <a href="#Home" onClick={toggleList1} className='a'>
                            <span className={`icon`}><i className={`fas fa-home`}></i></span>
                            <span className={`item text`}>Home</span>
                        </a>
                    </li>
                    
                    
                    {/* <li>
                        <a href="#Sell" onClick={toggleList4} className='d'>
                            <span class="icon"><i class="fas fa-chart-line"></i></span>
                            <span class="item text">Categories</span>
                        </a>
                    </li> */}
                    <li>
                        <a href="#MyProfile" onClick={toggleList5} className='e'>
                            <span className={`icon`}><i className={`fas fa-desktop`}></i></span>
                            <span className={`item text`}>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Saved" onClick={toggleList6} className='f'>
                            <span className={`icon`}><i className={`fas fa-tachometer-alt`}></i></span>
                            <span className={`item text`}>Saved</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#">
                            <span class="icon"><i class="fas fa-user-shield"></i></span>
                            <span class="item text">Admin</span>
                        </a>
                    </li> */}
                    <li>
                        <a href="#LogOut" onClick={toggleList7} className='g'>
                            <span className={`icon`}><i className={`fas fa-cog`}></i></span>
                            <span className={`item text`}>Log Out</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Donate" onClick={toggleList2} className='b'>
                            <span className={`icon`}><i className={`fas fa-user-friends`}></i></span>
                            <span className={`item text`}>About us</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Buy" onClick={toggleList3} className='c'>
                            <span className={`icon`}><i className={`fas fa-database`}></i></span>
                            <span className={`item text`} style={{fontSize:'15px'}}>Contact us</span>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
        </div>
    );
}
export default SideBar;