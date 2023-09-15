import React from "react";
import { useContext } from "react";
import StarBookmark from "../StarBookmark/StarBookmark";
import AllContext from "../../Store/Context";
import styles from "./CardStore.module.css";

const CardStore = () => {
  const context = useContext(AllContext);

  return (
    <div className={styles.frame13}>
      <div className={styles.card}>
        <p className={styles.description}>Name :</p>
        <p className={styles.descriptionTwo}>Address :</p>
        <p className={styles.descriptionThree}>About :</p>
        <div className={styles.flexWrapperOne}>
          <div className={styles.flexWrapperThree}>
            <p className={styles.st}>ST</p>
            <div className={styles.group33}>
              <img
                alt=""
                className={styles.istockphoto1314210006170667a1}
                // src="https://static.overlay-tech.com/assets/4ca6d844-f054-4c5c-b329-c8fced0d87b5.png"
                src="Images/Store.jpg"
              />
            </div>
            <p className={styles.re}>RE</p>
            <div className={styles.rectangle64}></div>
            <div className={styles.rectangle63}></div>
          </div>
          <div className={styles.relativeWrapperOne}>
            <p className={styles.homsSyria}>Family Store</p>
            <p className={styles.homsSyriaTwo}>Homs, Syria</p>
            <p className={styles.homsSyriaThree}>For her & For him</p>
          </div>

          {/* <div className={styles.VIEW}>
            <div className={styles.flexWrapperTwo}>
              <a href="ViewStore" className={styles.viewStore}>View Store</a>
            </div>
          </div> */}
          <a href="#ViewStore" className={styles.view}>
            <span className={styles.viewTxt} onClick={context.toggleProfile}>
              View Store
            </span>
          </a>

          <div className={styles.VIEW2}>
            <StarBookmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStore;
