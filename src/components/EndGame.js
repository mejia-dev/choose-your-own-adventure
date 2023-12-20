import playerData from "./PlayerData";

const EndGame = () => {
    let storyElement1;
    let storyElement2;
    let storyElement3;

    const inventory =  playerData.inventory

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
        Once upon a time in the vast expanse of the pirate-infested seas, <b>Captain {playerData.name}</b> and their rowdy crew, known as the {playerData.crew}, embarked on a daring adventure in search of {storyElement1}. Legend had it that this coveted {storyElement1} held the key to unlocking untold treasures hidden on the mysterious isle.

        With a {storyElement2} in hand and the salty breeze guiding their ship, the {playerData.crew} sailed through tumultuous waters, fueled by the promise of riches and the undeniable allure of {storyElement3}. As they approached the fabled isle, tales of its perilous shores and the mythical guardians that protected the treasures stirred both excitement and trepidation among the crew.

        Upon landing on the sandy shores, <b>Captain {playerData.name}</b> and the {playerData.crew} ventured into the heart of the island, following the clues that would lead them to the coveted {storyElement1}. Along the way, they encountered mysterious caves, uncharted jungles, and riddles left behind by long-forgotten pirates. The journey tested their wits, courage, and camaraderie, forging an unbreakable bond among the crew members.

        As they reached the hidden chamber where the {storyElement1} was said to be held, the crew faced a choice - would they use the {storyElement2} as an offering to appease the mystical guardians, or would they rely on the enchanting powers of the {storyElement3} to unlock the secrets within?

        With a raise of the {storyElement2}, the crew made their choice, and the chamber revealed its long-lost treasures. The {storyElement1} gleamed in the dim light, a symbol of their triumph and the beginning of a new chapter in pirate lore. The {playerData.crew} celebrated their victory with a hearty feast, sharing tales of their daring exploits and raising their tankards high in honor of the riches they had uncovered.

        And so, <b>Captain {playerData.name}</b> and the {playerData.crew} sailed into the sunset, their ship laden with treasures and their hearts filled with the thrill of adventure. The legend of their quest echoed through the pirate-infested seas, inspiring new generations of buccaneers to seek their own fortunes and write their own tales of daring and glory.
      </p>
    )
}

export default EndGame;





// The siren's scale had the mystical ability to calm turbulent seas at the command of its possessor, ensuring safe passage through stormy waters and earning the admiration of both allies and rivals alike. 
// Tales whispered in the darkest corners of pirate taverns spoke of a mythical artifact, said to possess the power to control the very tides themselves. Legends spun by old sea dogs hinted at the location, revealing a labyrinthine series of underwater caves beneath the foreboding Black Isle. With their heart pounding like a drum, Bob and their crew plunged into the depths, guided only by the dim glow of luminescent sea creatures, in search of the fabled siren's scale.





// With pockets filled with mythical trinkets from the friendly fleet, Captain ___ set off on their next adventure! With the coveted 

// ((Black pearl incorporated into their ship’s masthead, its mythical aura would bring l would bring both luck and an extra dose of whimsy to their seafaring adventures.))


// ((the barnacle badge, entry to the exclusive barnacle club was guaranteed, and Captain and crew made a detour for a night of crustacean clubbing))




