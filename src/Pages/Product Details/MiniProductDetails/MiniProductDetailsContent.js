import React from "react";
import styled from "@emotion/styled";
// import Rectangle65 from "./Rectangle65";

import classes from './MiniProductDetailsContent.module.css'

const MiniProductDetailsContent = (props) => {
  return (
      <div className={classes.card}>
        <div className={classes.cover}/>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.productPics}>
            <img src='Images/pic1.png' alt="pic1" className={classes.pic1}/>
            <img src='Images/pic2.png' alt="pic2" className={classes.pic2}/>
            <img src='Images/pic3.png' alt="pic3" className={classes.pic3}/>
            <img src='Images/pic4.png' alt="pic4" className={classes.pic4}/>
            <img src='Images/pic5.png' alt="pic5" className={classes.pic5}/>
            <img src='Images/mainPic.png' alt="mainPic" style={{width:'459px',height:'433px',left:'62.5px'}} className={classes.mainPic}/>
        </div>

        <p className={classes.title}>CHIC SOFA</p>

        <div className={classes.rating}>rating</div>

        <p className={classes.description}>
            In most states, the legal limit in blood alcohol to not be considered DUI is 500 to 1,000
            mg/L. Therefore, this is way below a level considered to be intoxication.
        </p>


      <p className={classes.details}>
        <span className={classes.width}>Width: <span style={{color:'black'}}>40cm</span></span>
        <span className={classes.height}>height: <span style={{color:'black'}}>50cm</span></span>
        <span className={classes.weight}>Weight: <span style={{color:'black'}}>3kg</span></span>
      </p>

      <div className={classes.buttons}>
        <Rectangle66 />
        <Rectangle67 />
        <Rectangle68 />
        <C1>1</C1>
        {/* <Rectangle70 /> */}

        <button className={classes.addToCart}>Add to cart</button>
        
        <Component>-</Component>
        <Component1>+</Component1>.

      </div>
    </div>
  );
};


const Rectangle66 = styled.div`
  width: 57px;
  height: 54px;
  position: absolute;
  left: 699.5px;
  top: 421.5px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background: rgba(217,217,217,0.5);
  border-top-width: 1px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-color: rgba(0,0,0,0.5);
  border-style: solid;

  cursor: pointer;
`;

const Rectangle67 = styled.div`
  width: 57px;
  height: 54px;
  position: absolute;
  left: 756.5px;
  top: 421.5px;
  background: #fff;
  border-width: 1px;
  border-color: rgba(0,0,0,0.5);
  border-style: solid;
`;

const Rectangle68 = styled.div`
  width: 57px;
  height: 54px;
  position: absolute;
  left: 813.5px;
  top: 421.5px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgba(217,217,217,0.5);
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-color: rgba(0,0,0,0.5);
  border-style: solid;

  cursor: pointer;
`;

const C1 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  position: absolute;
  top: 430px;
  left: 756.5px;
  width: 57px;
  height: 54px;
  font-family: Inter;
  font-size: 28px;
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 300;
  text-align: center;
  color: #000;
`;


const Rectangle70 = styled.div`
  width: 55px;
  height: 54px;
  position: absolute;
  left: 1068.5px;
  top: 421.5px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #d9d9d9;
`;


const Component = styled.p`
  margin: 0;
  white-space: pre-wrap;
  position: absolute;
  top: 426.5px;
  left: 722.5px;
  font-family: Inter;
  font-size: 32px;
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 300;
  text-align: center;
  color: #000;

  cursor: pointer;
`;

const Component1 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  position: absolute;
  top: 426.5px;
  left: 831.5px;
  font-family: Inter;
  font-size: 32px;
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 300;
  text-align: center;
  color: #000;

  cursor: pointer;
`;

export default MiniProductDetailsContent;