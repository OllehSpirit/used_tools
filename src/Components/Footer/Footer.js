import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import classes from "./Footer.module.css";

function StartingPage() {
  return (
    <div className={classes.footer}>
      <p className={classes.contact}>
        For more information please contact us :
      </p>
      <SocialMediaIcons />

      <img src="Images/Logo.png" alt="Logo" className={classes.img} />

      <p className={classes.copy}>Copyright © Used Store 2023</p>
      <br/>
    </div>
  );
}

export default StartingPage;
