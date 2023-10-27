import Class from "./SkillIcons.module.css";
import {useState} from "react";

import {AiFillHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {SiExpress, SiMongodb, SiGithub, SiKubernetes, SiAmazonaws} from "react-icons/si";
import {BiLogoJavascript, BiLogoReact} from "react-icons/bi";
import {GrNode, GrDocker} from "react-icons/gr";
import {DiRuby, DiRor} from "react-icons/di";

function SkillIcons({bigFont, activeSkills}) {
  const [active1, setIsActive1] = useState(false);
  const [active2, setIsActive2] = useState(false);
  const [active3, setIsActive3] = useState(false);
  const [active4, setIsActive4] = useState(false);
  const [active5, setIsActive5] = useState(false);
  const [active6, setIsActive6] = useState(false);
  const [active7, setIsActive7] = useState(false);
  const [active8, setIsActive8] = useState(false);
  const [active9, setIsActive9] = useState(false);
  const [active10, setIsActive10] = useState(false);
  const [active11, setIsActive11] = useState(false);
  const [active12, setIsActive12] = useState(false);
  const [active13, setIsActive13] = useState(false);

  const iconHandler = (e) => {
    if (e.target.id === "span") return;

    const iconMap = {
      html: setIsActive1,
      css: setIsActive2,
      javascript: setIsActive3,
      node: setIsActive4,
      express: setIsActive5,
      react: setIsActive6,
      ruby: setIsActive7,
      rails: setIsActive8,
      mongodb: setIsActive9,
      github: setIsActive10,
      docker: setIsActive11,
      kubernetes: setIsActive12,
      aws: setIsActive13,
    };

    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
    setIsActive7(false);
    setIsActive8(false);
    setIsActive9(false);
    setIsActive10(false);
    setIsActive11(false);
    setIsActive12(false);
    setIsActive13(false);

    const clickedIconId = e.target.closest("div").id;
    const setActive = iconMap[clickedIconId];

    if (setActive) {
      setActive((prev) => !prev);
    }
  };
  const iconResetHandler = (e) => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
    setIsActive7(false);
    setIsActive8(false);
    setIsActive9(false);
    setIsActive10(false);
    setIsActive11(false);
    setIsActive12(false);
    setIsActive13(false);
  };
  return (
    <div
      className={`${Class.skillIcons} ${bigFont ? Class.bigFont : Class.smallFont}`}
      id="icon-container"
      onMouseLeave={iconResetHandler}
    >
      {activeSkills["aws"] && (
        <div onMouseOver={iconHandler} id="aws">
          <SiAmazonaws className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active13 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Amazon Web Services
          </span>
        </div>
      )}
      {activeSkills["docker"] && (
        <div onMouseOver={iconHandler} id="docker">
          <GrDocker className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active11 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Docker
          </span>
        </div>
      )}
      {activeSkills["kubernetes"] && (
        <div onMouseOver={iconHandler} id="kubernetes">
          <SiKubernetes className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active12 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            K8s
          </span>
        </div>
      )}
      {activeSkills["html"] && (
        <div onMouseOver={iconHandler} id="html">
          <AiFillHtml5 className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active1 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            HTML5
          </span>
        </div>
      )}
      {activeSkills["css"] && (
        <div onMouseOver={iconHandler} id="css">
          <IoLogoCss3 className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active2 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            CSS3
          </span>
        </div>
      )}

      {activeSkills["javascript"] && (
        <div onMouseOver={iconHandler} id="javascript">
          <BiLogoJavascript className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active3 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Javascript
          </span>
        </div>
      )}
      {activeSkills["react"] && (
        <div onMouseOver={iconHandler} id="react">
          <BiLogoReact className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active6 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            React
          </span>
        </div>
      )}
      {activeSkills["node"] && (
        <div onMouseOver={iconHandler} id="node">
          <GrNode className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active4 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Node
          </span>
        </div>
      )}
      {activeSkills["express"] && (
        <div onMouseOver={iconHandler} id="express">
          <SiExpress className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active5 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Express
          </span>
        </div>
      )}

      {activeSkills["mongodb"] && (
        <div onMouseOver={iconHandler} id="mongodb">
          <SiMongodb className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active9 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            MongoDB
          </span>
        </div>
      )}
      {activeSkills["rails"] && (
        <div onMouseOver={iconHandler} id="rails">
          <DiRor className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active8 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Rails
          </span>
        </div>
      )}
      {activeSkills["ruby"] && (
        <div onMouseOver={iconHandler} id="ruby">
          <DiRuby className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active7 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Ruby
          </span>
        </div>
      )}
    </div>
  );
}

export default SkillIcons;
