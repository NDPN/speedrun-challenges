import React from "react";
import fourcard from "./Fourcard.module.scss";
import calculator from "../img/icon-calculator.svg";
import karma from "../img/icon-karma.svg";
import supervisor from "../img/icon-supervisor.svg";
import team from "../img/icon-team-builder.svg";

const Card = (props) => {
  return (
    <div
      style={{ borderTop: `5px solid ${props.color}` }}
      className={fourcard.card}
    >
      <p className={fourcard.cardTitle}>{props.title}</p>
      <p className={fourcard.cardContent}>{props.content}</p>
      <div>
        <img src={props.img} alt="..." />
      </div>
    </div>
  );
};

function Fourcard() {
  return (
    <div>
      <div className={fourcard.header}>
        <p className={fourcard.title_1}>Reliable, efficient delivery</p>
        <p className={fourcard.title_2}>Powered by Technology</p>
        <p style={{ color: "gray" }}>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div className={fourcard.cardLayout}>
        <Card
          color="red"
          title="Supervisor"
          content="Monitors activity to identify project roadblocks"
          img={supervisor}
        />
        <div>
          <Card
            color="red"
            title="Team Builder"
            content="Scans our talent network to create the optimal team for your project"
            img={team}
          />
          <Card
            color="red"
            title="Karma"
            content="Regularly evaluates our talent to ensure quality"
            img={karma}
          />
        </div>
        <Card
          color="red"
          title="Calculator"
          content="Uses data from past projects to provide better delivery estimates"
          img={calculator}
        />
      </div>
    </div>
  );
}

export default Fourcard;
