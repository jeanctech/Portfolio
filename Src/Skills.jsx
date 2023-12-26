import Html from "./assets/Html.png";
import Css from "./assets/Css.png";
import Git from "./assets/Git.png";
import Github from "./assets//Github.png";
import Js from "./assets/JavaScript.png";
import Json from "./assets/Json.png"
import Type from "./assets/TypeScript.png";
import Rect from "./assets/React.png";
import Vue from "./assets/Vue.png";
import Py from "./assets/Python.png";
import "../styles/Skills.css";

function Skills() {
  return (
    <>
      <div className="skills">
        <div className="skills-header">
          <h2>Habilidades</h2>
          <p>
            <strong>Techologias</strong>
          </p>
          <div className="skils-layout">
            <div className="skills-cart">
              <img src={Html} alt="" width={79} />
              <br />
              <span>Html</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Css} alt="" width={79} />
              <br />
              <span>Css</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Git} alt="" width={79} />
              <br />
              <span>Git</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Github} alt="" width={79} />
              <br />
              <span>Github</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Js} alt="" width={79} />
              <br />
              <span>JavaScript</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Json} alt="" width={79} />
              <br />
              <span>Json</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Type} alt="" width={79} />
              <br />
              <span>TypeScript</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Rect} alt="" width={79} />
              <br />
              <span>React</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Vue} alt="" width={79} />
              <br />
              <span>Vue</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Py} alt="" width={79} />
              <br />
              <span>Python</span>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
