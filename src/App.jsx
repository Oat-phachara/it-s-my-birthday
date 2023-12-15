import "./App.css";
import { useEffect, useState } from "react";

import CardComponent from "./components/Card";
import TitleComponent from "./components/Title";
import SubTitleComponent from "./components/SubTitle";

function App() {
  const title = "Countdown to my birthday";
  const subTitle =
    "I've utilized React to craft a website dedicated to a birthday countdown as part of my studies at Westride. This project was developed by Phachara, showcasing a seamless blend of technology and creativity.";

  //state
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getCountdown = (birthDate) => {
    let now = new Date().getTime();
    let timeCount = birthDate - now;

    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeCount % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeCount % (1000 * 60)) / 1000);
    setTime({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    setInterval(() => {
      let day = 25; //your birth days
      let month = 9; //your month days
      let year =
        new Date().getMonth() + 1 > month
          ? new Date().getFullYear() + 1
          : new Date().getMonth() + 1 === month && new Date().getDate() > day
          ? new Date().getFullYear() + 1
          : new Date().getFullYear();

      let birthDate = new Date(`${month}/${day}/${year}`).getTime();
      getCountdown(birthDate);
    }, 1000); //1000 millisecond = 1 second
  }, []);

  return (
    <div className="container">
      <div className="countdown">
        <TitleComponent title={title} />
        <SubTitleComponent subTitle={subTitle} />
        <div className="countdown__group">
          <CardComponent time={time.days} title="Days" />
          <CardComponent time={time.hours} title="Hours" />
          <CardComponent time={time.minutes} title="Minutes" />
          <CardComponent time={time.seconds} title="Seconds" />
        </div>
      </div>
    </div>
  );
}

export default App;
