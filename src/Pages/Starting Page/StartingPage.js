import classes from "./StartingPage.module.css";
import LogInSignUp from "../../Components/LogIn_SignUp/LogIn_SignUp";
// import AutoTyping from "../../Components/Auto Typing/AutoTyping";
// import CurlyBracket from "../../Components/CurlyBracket/CurlyBracket";
import GlassCard from "../../Components/GlassCard/GlassCard";
import Title from "../../Components/Title/Title";
import LastProducts from "../../Components/LastProducts/LastProducts";
import Footer from "../../Components/Footer/Footer";

function StartingPage() {
  return (
    <div>
      <a href="hid" name="home" style={{ visibility: "hidden" }}>
        hidden
      </a>
      <LogInSignUp />
      <br />
      <br />
      {/* <AutoTyping/> */}
      <br />
      <br />
      {/* <CurlyBracket/> */}
      <a
        href="hid"
        name="features"
        className={classes.a}
        style={{ visibility: "hidden" }}
      >
        hidden
      </a>
      <Title
        text="O U R &nbsp; F E A T U R E S"
        style={{ marginTop: "500px" }}
      />
      <br />
        <GlassCard
          header="D O N A T E"
          text="One man's trash is another man's treasure, help others who are less fortunate "
          source="Images/Donate.png"
        />
        <GlassCard
          header="B U Y"
          text="Why buy things brand new, while you can find the same quality for less price?"
          source="Images/Buy.png"
        />
        <GlassCard
          header="S E L L"
          text="You can make money out of your used stuff that you do not need any more"
          source="Images/Sell.png"
        />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a
        href="hid"
        name="products"
        className={classes.a}
        style={{ visibility: "hidden" }}
      >
        hidden
      </a>
      <Title text="L A S T &nbsp; 3 &nbsp; P R O D U C T S" />
      <br />
      <LastProducts />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a
        href="hid"
        name="contactUs"
        className={classes.a}
        style={{ visibility: "hidden" }}
      >
        hidden
      </a>
      <Footer />
    </div>
  );
}

export default StartingPage;
