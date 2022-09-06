import React from "react";
import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Project- DEV Together",
      desc: "Tech Stack - MERN, JavaScript, Material UI, HTML, CSS, RESTful API",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      link: "https://dev-together-frontend.vercel.app/",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Project- Fullstack User Data App",
      desc: "Tech Stack - Backend routes with endpoints for various HTTP methods Controllers, Middleware, Error handling, MongoDB database + collections Mongoose methods, Mongoose models + schemas. Relations between collections, Data validation, bcrypt, Authentication with JWT Authorization, Local Storage and Cookies. Enabling registration, login, saving and updating data with a common storage for all user data, accessible to users and admins selectively.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      link: "https://user-data-app.vercel.app/",
    },
    {
      id: "3",
      icon: "./assets/blacksabbath.jpg",
      title: "Project- Single Page Application Shooting Stars",
      desc: "Tech Stack - React class components, State variables, useEffect, useParams, useContext, useReducer. In this app, users can store their favorite albums from a particular band. Update their list with details of the albums.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      link: "https://spa-shooting-stars.vercel.app/",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Project- Contact-Manager App",
      desc: "Tech Stack - Material UI, Reactjs, reactRouter, hook state, axios-react and used Figma as a prototyping tool. Different React topics and its implementation in one single project which allows to add, edit, save, search your contacts from a list of contacts available.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      link: "https://reactcontactmanagerapp.netlify.app/",
    },

    {
      id: "5",
      icon: "./assets/chat.png",
      title: "Project- User Interface Design Website homepage",
      desc: "Tech Stack - Html5, CSS. A webpage with an impressive User interface Design created for a one day project. The page focuses on minimalism, motion design and making it interaction friendly.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      link: "https://user-interface-design-website-homepage.vercel.app/",
     }
    // {
    //   id: "4",
    //   icon: "./assets/writing.png",
    //   title: "Fullstack- E-Commerce Website",
    //   desc: "Tech Stack - MUI, Express, Nodejs MongoDB, Models, Authentication, JWT, CRUD, Node.js Stripe, React, Node.js Stripe Implementation, React Slider, Designing, React Slider, Login and Register, Styled components converting responsive design. This is an ongoing project and I am still building it...",
    //   img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    //   link: "",
    // },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      > 
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}>
                    {" "}
                    <span>Go to project!</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
