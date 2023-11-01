import Class from "./SkillIcons.module.css";
import {useState} from "react";
import {motion} from "framer-motion";

import {AiFillHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {SiExpress, SiMongodb, SiPython, SiKubernetes, SiAmazonaws} from "react-icons/si";
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
      python: setIsActive10,
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
  const variantList = {
    hidden: {
      transition: {opacity: 0},
    },
    visible: {
      transition: {opacity: 1, duration: 1, delayChildren: 0.3, staggerChildren: 0.05},
    },
  };
  const variantItem = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      // Framer motion animation config
      initial="hidden"
      whileInView="visible"
      variants={variantList}
      //--------------------------------
      className={`${Class.skillIcons} ${bigFont ? Class.bigFont : Class.smallFont}`}
      id="icon-container"
      onMouseLeave={iconResetHandler}
    >
      {activeSkills["aws"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="aws">
          <SiAmazonaws className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active13 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Amazon Web Services
          </span>
        </motion.div>
      )}
      {activeSkills["docker"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="docker">
          <GrDocker className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active11 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Docker
          </span>
        </motion.div>
      )}
      {activeSkills["kubernetes"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="kubernetes">
          <SiKubernetes className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active12 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            K8s
          </span>
        </motion.div>
      )}
      {activeSkills["html"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="html">
          <AiFillHtml5 className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active1 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            HTML5
          </span>
        </motion.div>
      )}
      {activeSkills["css"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="css">
          <IoLogoCss3 className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active2 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            CSS3
          </span>
        </motion.div>
      )}

      {activeSkills["javascript"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="javascript">
          <BiLogoJavascript className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active3 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Javascript
          </span>
        </motion.div>
      )}
      {activeSkills["react"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="react">
          <BiLogoReact className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active6 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            React
          </span>
        </motion.div>
      )}
      {activeSkills["node"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="node">
          <GrNode className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active4 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Node
          </span>
        </motion.div>
      )}
      {activeSkills["express"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="express">
          <SiExpress className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active5 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Express
          </span>
        </motion.div>
      )}

      {activeSkills["mongodb"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="mongodb">
          <SiMongodb className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active9 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            MongoDB
          </span>
        </motion.div>
      )}
      {activeSkills["python"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="python">
          <SiPython className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active10 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Python
          </span>
        </motion.div>
      )}
      {activeSkills["ruby"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="ruby">
          <DiRuby className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active7 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Ruby
          </span>
        </motion.div>
      )}
      {activeSkills["rails"] && (
        <motion.div variants={variantItem} onMouseOver={iconHandler} id="rails">
          <DiRor className={Class.icon} />
          <span
            id="span"
            className={`${Class.iconDesc} ${active8 ? Class.activeIconDesc : ""} ${
              bigFont ? Class.descBigFont : Class.descSmallFont
            }`}
          >
            Rails
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

export default SkillIcons;
