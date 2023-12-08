import Html from "./Assets/Html.png";
import Css from "./Assets/Css.png";
import Git from "./Assets/Git.png";
import Github from "./Assets//Github.png";
import Js from "./Assets/JavaScript.png";
import Json from "./Assets/Json.png"
import Type from "./Assets/TypeScript.png";
import Rect from "./Assets/React.png";
import Vue from "./Assets/Vue.png";
import Py from "./Assets/Python.png";
import "../Styles/Skills.css";

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
              <img src={Html} alt="" width={82} />
              <br />
              <span>Html</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Css} alt="" width={82} />
              <br />
              <span>Css</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Git} alt="" width={82} />
              <br />
              <span>Git</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Github} alt="" width={82} />
              <br />
              <span>Github</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Js} alt="" width={82} />
              <br />
              <span>JavaScript</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Json} alt="" width={82} />
              <br />
              <span>Json</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Type} alt="" width={82} />
              <br />
              <span>TypeScript</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Rect} alt="" width={82} />
              <br />
              <span>React</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Vue} alt="" width={82} />
              <br />
              <span>Vue</span>
            </div>
            <br />
            <div className="skills-cart">
              <img src={Py} alt="" width={82} />
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
