import { useEffect, useState } from "react";

import Card from "../../Components/Card/Card";
import MainNavigation from "../../Components/MainNavigation/MainNavigation";
// import SideBar from "../../Components/SideBar/SideBar";
import Welcome from "../../Components/Welcome/Welcome";
import Author from "../Profile/Auhor Profile/Author";
import classes from "./Main.module.css";
import Footer from "../../Components/Footer/Footer";
import AutoTyping from "../../Components/Auto Typing/AutoTyping";
import CardStore from "../../Components/Card Store/CardStore";
import SideBar from "../../Components/SideBar/SideBar";
import MiniProductDetails from "../Product Details/MiniProductDetails/MiniProductDetails";
import { useContext } from "react";
import AllContext from "../../Store/Context";

export var a = 0;
export var a2 = 0;
export function resetAClose() {
  // console.log('Done')
  a = -0;
  a2 = -0;
}
export function resetAOpen() {
  // console.log('Done')
  a = 0;
  a2 = 0;
}
function Main() {
  const [products, setProducts] = useState([]);
  const END = useContext(AllContext);
  useEffect(() => {
    document.getElementById("transLeft").style.visibility = "hidden";
    document.getElementById("transLeft2").style.visibility = "hidden";

    fetch(`${END.ENDPOINT}/products`)
      .then((res) => res.json())
      .then((products) => setProducts(products.Products));
  },[END.ENDPOINT]);

  function translateCardsRight() {
    a -= 500;

    const card = document.getElementById("cards");
    document.getElementById("transLeft").style.visibility = "visible";
    if (a >= -1000) {
      card.style.transform = `translate(${a}px)`;
      card.style.transitionDuration = "1s";

      if (a === -1000) {
        document.getElementById("trans").style.visibility = "hidden";
      }
    }
  }

  function translateCardsLeft() {
    a += 500;
    const card = document.getElementById("cards");
    document.getElementById("trans").style.visibility = "visible";
    if (a <= 0) {
      card.style.transform = `translate(${a}px)`;
      card.style.transitionDuration = "1s";

      if (a === 0) {
        document.getElementById("transLeft").style.visibility = "hidden";
      }
    }
  }

  function translateCardsRight2() {
    a2 -= 500;

    const card2 = document.getElementById("cards2");
    document.getElementById("transLeft2").style.visibility = "visible";
    if (a2 >= -1000) {
      card2.style.transform = `translate(${a2}px)`;
      card2.style.transitionDuration = "1s";

      if (a2 === -1000) {
        document.getElementById("trans2").style.visibility = "hidden";
      }
    }
  }

  function translateCardsLeft2() {
    a2 += 500;
    const card = document.getElementById("cards2");
    document.getElementById("trans2").style.visibility = "visible";
    if (a2 <= 0) {
      card.style.transform = `translate(${a2}px)`;
      card.style.transitionDuration = "1s";

      if (a2 === 0) {
        document.getElementById("transLeft2").style.visibility = "hidden";
      }
    }
  }

  return (
    <div>
      <Welcome />
      <MainNavigation />
      <img src="images/Cover4.jpg" alt="Cover" className={classes.cover} />
      <AutoTyping />
      <button
        onClick={translateCardsRight2}
        id="trans2"
        className={classes.btnRight}
      >
        <i className="bx bx-chevron-right"></i>
      </button>
      <button
        onClick={translateCardsLeft2}
        id="transLeft2"
        className={classes.btnLeft}
      >
        <i className="bx bx-chevron-left"></i>
      </button>

      <h2 className={classes.h2} id="title">
        {" "}
        S t o r e s &nbsp; N e a r &nbsp; Y o u
      </h2>
      <a href="SeeAllStores" className={classes.a}>
        SEE ALL {">>"}
      </a>
      <div style={{ display: "flex" }} id="cards2">
        <CardStore />
        <CardStore />
        <CardStore />
        <CardStore />
      </div>

      {/* <br/> */}
      <button
        onClick={translateCardsRight}
        id="trans"
        className={classes.btnRight}
      >
        <i className="bx bx-chevron-right"></i>
      </button>
      <button
        onClick={translateCardsLeft}
        id="transLeft"
        className={classes.btnLeft}
      >
        <i className="bx bx-chevron-left"></i>
      </button>

      <h2 className={classes.h2} id="title">
        {" "}
        B e l o v e d &nbsp;&nbsp; P r o d u c t s{" "}
      </h2>
      <a href="SeeAllStores" className={classes.a}>
        SEE ALL {">>"}
      </a>
      <div style={{ display: "flex" }} id="cards" >

        {products.length!==0 ? products.map((product) => {
              return <Card product={product} key={product.id}/>;
            }): null}
      </div>

      <Author />
      <MiniProductDetails />
      <SideBar />
      <Footer />
    </div>
  );
}
export default Main;
