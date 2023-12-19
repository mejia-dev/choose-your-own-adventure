import React from "react";
import PropTypes from "prop-types";

export default function IntroShipRendering(props) {
  return (
    <React.Fragment>
      {props.fullDungeonList.map((dungeon) => 
        <h3>{dungeon.name}</h3>
      )}
    </React.Fragment>
  )
}

IntroShipRendering.propTypes = {
  fullDungeonList: PropTypes.array
}