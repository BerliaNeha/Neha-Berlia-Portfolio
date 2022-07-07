import "./testimonials.scss"
import React from 'react'


export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Jamie Cartwright",
      title: "Web Development Virtual Lecturer / Pod Supervisor-DCI",
      img:
        "./assets/jamieCartWright.jpeg",
      icon: "assets/email.png",
      desc:
        "Berlia has been a highly engaged and constructive member of the class.She is an inquisitive and confident learner, who has demonstrated not only a passion for writing clean, technically proficient code, but also a drive to understand the principles behind the code she writes.",
    },
    {
      id: 2,
      name: "Laura Hesse",
      title: "Student & Class Tutor- DCI",
      img:
        "assets/LaurHesseNoBg.png",
      icon: "assets/linkedin.png",
      desc:
        "...extremely hardworking, professional and trustworthy. As class representative, she was skilled in providing a bridge between her fellow students and the DCI class teachers and managers.",
      featured: true,
    },
    {
      id: 3,
      name: "Petra Kuhlmann Hodick",
      title: "Senior Curator- SKD",
      img:
        "./assets/woman.png",
      icon: "assets/email.png",
      desc:
        "...close to the publication time, Neha kept her energy level up and attention to detail. I was impressed by her work ethic and friendly personality and ability to work well under pressure.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}