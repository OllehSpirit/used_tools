import { useContext } from "react";
import AllContext from "../../Store/Context";
import StarBookmark from "../StarBookmark/StarBookmark";

import "./Card.css";

function Card() {
  const context = useContext(AllContext);

  return (
    <div>
      <div>
        <div>
          {/* <!-- Post--> */}
          <div className={`post-module`} id="card">
            <div className={`thumbnail`}>
              <div className={`date`}>
                <div className={`day`}>27</div>
                <div className={`month`}>Mar</div>
              </div>
              <div className={`postedBy`} onClick={context.toggleProfile}>
                <i className={`fa fa-user`}></i>
                <span> Posted by AnasAttoum</span>
              </div>
              {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" alt='Product'/> */}
              <img src="Images/Product4.webp" alt="Product" />
            </div>

            {/* <!-- Post Content--> */}
            <div className={`post-content`}>
              <div className={`category`}>Photos</div>

              <h1 className={`title`}>City Lights in New York</h1>

              <p className={`description`}>
                New York, the largest city in the U.S., is an architectural
                marvel with plenty of historic monuments, magnificent buildings
                and countless dazzling skyscrapers.
              </p>
              <p className={`description address`}>Homs, Alarman</p>

              <a className={`description coolis`} href="#book">
                <span onClick={context.toggleProduct}>Book</span>
              </a>
              <a className={`description coolis2`} href="#moreDetail">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="var(--purple)"
                  className="bi bi-box-arrow-in-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                  />
                </svg>

                {/* <small className='more'>Moredetail</small> */}
              </a>

              {/* <div className="post-meta">
                        <span className="timestamp">
                        <i className="fa fa-clock-">o</i> 6 mins ago
                        </span>
                        <span className="comments">
                        <i className="fa fa-comments"></i>
                        <a href="#"> 39 comments</a>
                        </span>
                    </div> */}
            </div>
                    <StarBookmark />
          </div>
        </div>
      </div>
      {/* { profileIsOpen && <MiniAuthorProfile/> }*/}
      {/* { profileIsOpen && <Backdrop onCancel={closeProfile} /> } */}
    </div>
  );
}
export default Card;
