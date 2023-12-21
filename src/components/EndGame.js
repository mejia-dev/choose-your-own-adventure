import './EndGame.css';
import PropTypes from "prop-types";

const EndGame = (props) => {
    let storyElement1;
    let storyElement2;
    let storyElement3;

    const inventory =  props.playerData.inventory

    if (inventory.includes("Black Pearl")) {
        storyElement1 = "Black Pearl";
    } else if (inventory.includes("Barnacle Badge")) {
        storyElement1 = "Barnacle Badge";        
    } 
    
    if (inventory.includes("Rum")) {
        storyElement2 = "Rum";
    } else if (inventory.includes("Captain's Hat")) {
        storyElement2 = "Captain's Hat";
    }

    if (inventory.includes("Siren's Scale")) {
        storyElement3 = "Siren's Scale";
    } else if (inventory.includes("Doubloons")) {
        storyElement3 = "Doubloons";
    }

    return(

      <p>
        Once upon a time in the vast expanse of the pirate-infested seas, <b>Captain {props.playerData.name}</b> and their rowdy crew, known as {props.playerData.crew}, embarked on a daring adventure in search of the {storyElement1}. Legend had it that this coveted {storyElement1} held the key to unlocking untold treasures hidden on the mysterious isle.
        <br /><br />
        With a <em>{storyElement2.toLowerCase()}</em> in hand and the salty breeze guiding their ship, the {props.playerData.crew} sailed through tumultuous waters, fueled by the promise of riches and the undeniable allure of the <em>{storyElement3}</em>. As they approached the fabled isle, tales of its perilous shores and the mythical guardians that protected the treasures stirred both excitement and trepidation among the crew.
        <br /><br />
        Upon landing on the sandy shores, <b>Captain {props.playerData.name}</b> and {props.playerData.crew} ventured into the heart of the island, following the clues that would lead them to the coveted <em>{storyElement1}</em>. Along the way, they encountered mysterious caves, uncharted jungles, and riddles left behind by long-forgotten pirates. The journey tested their wits, courage, and camaraderie, forging an unbreakable bond among the crew members.
        <br /><br />
        As they reached the hidden chamber where the <em>{storyElement1}</em> was said to be held, the crew faced a choice - would they use the <em>{storyElement2.toLowerCase()}</em> as an offering to appease the mystical guardians, or would they rely on the enchanting powers of the <em>{storyElement3}</em> to unlock the secrets within?
        <br /><br />
        With a raise of the <em>{storyElement2.toLowerCase()}</em>, the crew made their choice, and the chamber revealed its long-lost treasures. The <em>{storyElement1}</em> gleamed in the dim light, a symbol of their triumph and the beginning of a new chapter in pirate lore. The {props.playerData.crew} celebrated their victory with a hearty feast, sharing tales of their daring exploits and raising their tankards high in honor of the riches they had uncovered.
        <br /><br />
        And so, <b>Captain {props.playerData.name}</b> and the {props.playerData.crew} sailed into the sunset, their ship laden with treasures and their hearts filled with the thrill of adventure. The legend of their quest echoed through the pirate-infested seas, inspiring new generations of buccaneers to seek their own fortunes and write their own tales of daring and glory.
      </p>
    )
}

EndGame.propTypes = {
    playerData: PropTypes.object
}

export default EndGame;