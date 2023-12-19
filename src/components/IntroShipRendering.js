import React from "react";
import PropTypes from "prop-types";

export default function IntroShipRendering(props) {
  return (
    <React.Fragment>
      {props.fullDungeonList.map((dungeon) => 
        <React.Fragment key={dungeon.id}>
        <div >
          <h3 >{dungeon.name}</h3>
          <p>{dungeon.descriptionText}</p>
          <button onClick={() => props.selectionFunction(dungeon.id)}>Select {dungeon.name}</button>
        </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

IntroShipRendering.propTypes = {
  fullDungeonList: PropTypes.array,
  selectionFunction: PropTypes.func
}