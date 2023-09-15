import { gsap } from "gsap";
import { useEffect } from "react";
import "./StarBookmark.css";

function StarBookmark() {
  useEffect(() => {
    document.querySelectorAll(".favorite-button").forEach((button) => {
      button.addEventListener("click", (e) => {});
    });
  });
  function a(e) {
    // console.log("hbk");
    e.preventDefault();
    document.querySelectorAll(".favorite_button").forEach((button) => {
      if (button.classList.contains("animated")) {
        return;
      }
      button.classList.add("animated");

      gsap.to(button, {
        keyframes: [
          {
            "--star-y": "-36px",
            duration: 0.3,
            ease: "power2.out",
          },
          {
            "--star-y": "48px",
            "--star-scale": 0.4,
            duration: 0.325,
            onStart() {
              button.classList.add("star_round");
            },
          },
          {
            "--star-y": "-64px",
            "--star-scale": 1,
            duration: 0.45,
            ease: "power2.out",
            onStart() {
              button.classList.toggle("active");
              setTimeout(() => button.classList.remove("star_round"), 100);
            },
          },
          {
            "--star-y": "0px",
            duration: 0.45,
            ease: "power2.in",
          },
          {
            "--button-y": "3px",
            duration: 0.11,
          },
          {
            "--button-y": "0px",
            "--star-face-scale": 0.65,
            duration: 0.125,
          },
          {
            "--star-face-scale": 1,
            duration: 0.15,
          },
        ],
        clearProps: true,
        onComplete() {
          button.classList.remove("animated");
        },
      });

      gsap.to(button, {
        keyframes: [
          {
            "--star-hole-scale": 0.8,
            duration: 0.5,
            ease: "elastic.out(1, .75)",
          },
          {
            "--star-hole-scale": 0,
            duration: 0.2,
            delay: 0.2,
          },
        ],
      });

      gsap.to(button, {
        "--star-rotate": "360deg",
        duration: 1.55,
        clearProps: true,
      });
    });
  }
  return (
    <div className="con">
      <button className="favorite_button" onClick={a}>
        <div className="icon">
          <div className="star"></div>
        </div>
        {/* <span>Favorite</span> */}
      </button>

      {/* <!-- dribbble - twitter --> */}
      <a
        className="dribbble"
        href="https://dribbble.com/ai"
        //  target="_blank"
      >
        {/* <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt=""/> */}
      </a>
      {/* <a className='twitter' target="_blank" href="https://twitter.com/aaroniker_me">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
                    <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path>
                </svg>
            </a> */}
    </div>
  );
}
export default StarBookmark;
