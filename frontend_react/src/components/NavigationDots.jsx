import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <>
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#f39056" } : {}}
            data-tooltip-id={item + index}
            data-tooltip-content={item}
          >
            {" "}
          </a>

          <ReactTooltip
            id={item + index}
            arrowColor="#fff"
            className="skills-tooltip"
          >
            {item}
          </ReactTooltip>
        </>
      ))}
    </div>
  );
};

export default NavigationDots;
