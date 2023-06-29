import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="hqdefault.jpg" alt="Courage" />;
}

function Intro() {
  return (
    <div>
      <h1> Courage </h1>
      <p>
        Full Stack web developer and teacher at Imaginary world. When not coding
        or preparing a course, i like to play a board games, to cook (and eat),
        or to just enjoy the Portuguese sun at the beach.{" "}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪🏽" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪🏽" color="orangered" />
      <Skill skill="JavaScript" emoji="💪🏽" color="yellow" />
      <Skill skill="Web Design" emoji="💪🏽" color="orange" />
      <Skill skill="Svelte" emoji="👶🏽" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill} </span>
      <span>{props.emoji} </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
