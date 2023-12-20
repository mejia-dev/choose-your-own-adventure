export const dungeonData = [
  {
    name: "Bumbling Barnacle",
    choiceArray: ["01C", "02C"],
    descriptionText: "A ship with a crew that tends to attract barnacles both on the ship's hull and as quirky sidekicks.",
    storyText: "Arrr, the cursed barnacles be defyin' the captain's orders and threatenin' to send the ship to Davy Jones's locker! The vessel be splinterin' and creakin' like a skeleton in a storm. What be yer course of action in this dire moment, me heartie?",
    id: "01D"
  },
  {
    name: "Groggy Galleon",
    choiceArray: ["03C", "04C"],
    descriptionText: "A ship known for its crew's love of grog and their tendency to stumble around the deck.",
    storyText: "Arrr, ye be newly docked on the ship, and the air be thick with tension. Do ye reckon it's time to stir the crew to a spirited mutiny, or perhaps call for a grand grog-tastin' gala to lift the spirits and drown the troubles in a sea of merriment? Yarrr, what say ye, me heartie? A mutiny under the Jolly Roger or a grog-soaked revelry to lighten the mood? Choose wisely, for the winds of fate be blowin' strong!",
    id: "02D"
  },
  {
    name: "Jolly Jellyfish",
    choiceArray: ["05C", "06C"],
    descriptionText: "A brightly colored ship with a crew that enjoys dancing like jellyfish when celebrating their victories.",
    storyText: "Ye step aboard a fresh vessel only to discover the entire crew be tangled in the mesmerizin' clutches of a siren's melody, makin' 'em jig and reel in a wild dance they can't resist. The ship's deck be a sea of uncontrollable merriment, a bewitched ball where the pirates be marionettes to the enchantin' tune of the sirens. The call of the sea sirens be both a curse and a spectacle, turnin' the ship into a rollickin' revelry on the unpredictable waves.",
    id: "03D"
  }
]

export const choiceData = [
  {
    text: "Barnacle-Led Voyage",
    buttonText: "Take the plunge!",
    resultText: "By the ghostly glow of the moon and the mysterious murmurings of the sea, ye decide to take a leap of piratey faith and allow the barnacles to chart the course. The rebellious crustaceans, like a watery compass gone rogue, guide the ship through uncharted waters and mystical currents. As the crew watches in awe, the barnacles seem to form patterns on the hull, as if speakin' the ancient language of the ocean. The ship follows their lead, sailin' a path unknown to even the most seasoned mariners. It's a mesmerizin' dance between ship and barnacle, as if Neptune himself had granted the barnacles dominion over the waves.",
    loot: "04L",
    id: "01C"
  },
  {
    text: "Barnacle Booty Bargain",
    buttonText: "Barrrrrgain!",
    resultText: "The Bumbling Barnacle's crew, ever the resourceful bunch, has developed a quirky system to share their plunder with the mischievous barnacles in order to foster cooperation.",
    loot: "05L",
    id: "02C" 
  },
  {
    name: "Grog Tasting Gala",
    buttonText: "Throw a gala",
    resultText: "As the first drops of grog touch the lips, the crew's spirits be lifted higher than the crow's nest. Sea shanties echo across the deck, and salty tales grow taller with every sip. The ship becomes a dance floor, with sailors stompin' and jiggin' like they've struck gold on a deserted island. In the glow of lantern light, alliances form over shared laughter and the clinkin' of tankards. The captain, pleased with the crew's newfound camaraderie, may even join in the festivities, regalin' the crew with tales of legendary pirates and daring escapades.",
    loot: "01L",
    id: "03C"
  },
  {
    name: "MUTINY!",
    buttonText: "Start a mutiny",
    resultText: "Avast, me heartie! The die be cast, and the shadows of mutiny have danced upon the decks. The conspirators, led by none other than yerself, rallied the disgruntled souls seekin' change in the ship's command. A clandestine coup unfolded, with coded messages passin' like ghostly whispers in the salty breeze. The Jolly Roger, once under the dominion of the former captain, now flies in the wind, symbolizin' a shift in leadership. As the tides of mutiny rolled forth, the captain, caught unawares or perhaps suspectin' the treacherous turn, faced a fate as unpredictable as the open sea. The victorious crew, with a new captain at the helm, set their sights on uncharted waters, their destinies interwoven with the whims of the fickle ocean.",
    loot: "03L",
    id: "04C"
  },
  {
    name: "Parrot's Siren Serenade",
    buttonText: "Deploy parrot!",
    resultText: "Ensnared in the bewitchin' melody of the sea sirens, ye, the intrepid sailor, ye deploy a savvy parrot to warble the sirens' own song right back at 'em, throwin' a curveball into their enchantin' symphony and leavin' the beguilin' sirens befuddled and ensnared in their own musical mayhem. The seas themselves be witnessin' the whimsical spectacle of a pirate's feathery companion outwittin' the alluring sirens with a melody as mischievous as a cat on a hot tin deck.",
    loot: "06L",
    id: "05C"
  },
  {
    name: "Swindle Me Timbers",
    buttonText: "Plunder!",
    resultText: "Ye don the Swashbucklin' Earmuffs, drownin' out the irresistible sirens' shanty, leavin' the merry crew lost in their own dancin' delirium. Seizin' the opportune moment, ye embark on a plunderin' spree, liberatin' the loot while the ensnared pirates two-step and hornpipe, oblivious to their ill-fated fate. Aye, a stealthy heist amidst the sea's musical chaos!",
    loot: "02L",
    id: "06C"
  }
]

export const lootData = [
  {
    obtainText: "Yum! You have found some Rum!",
    itemDescription: "Sip this seafarer's delight and let the echoes of distant waves whisk you away to the heart of the open ocean.",
    type: "Rum",
    id: "01L"
  },
  {
    obtainText: "Lucky you- you found doubloons!",
    itemDescription: "Picture this: big, chunky coins with kings and queens squintin' at each other on either side like they just heard the juiciest gossip. Pirates would be plunderin' ships left and right, lookin' for chests filled with these golden disco discs. 'Twas like the pirates had their own version of pirate bling - doubloons that said, 'I'm a swashbucklin' superstar on the high seas!'",
    type: "Doubloons",
    id: "02L"
  },
  {
    obtainText: "Ahoy! You've got the Captain's Hat!",
    itemDescription: "Adorned with weathered leather, bore the weight of countless sea breezes, its brim casting a shadow over a face etched with tales of maritime mastery.",
    type: "Captain's Hat",
    id: "03L"
  },
  {
    obtainText: "Behold, you've obtained the Black Pearl!",
    itemDescription: "In the heart of the treacherous brine, legends tell of a mystical treasure known as the Black Pearl—a shimmering orb, as dark as the midnight sea, said to harbor untold riches and a curse as old as Davy Jones himself. Many a brave explorer has sought to possess its mysterious bounty, yet none have returned to boast of their triumph over the enigmatic depths that guard the fabled Black Pearl.",
    type: "Black Pearl",
    id: "04L"
  },
  {
    obtainText: "Yer an honorary Barnacle now! You earned the Barnacle Badge!",
    itemDescription: "In the secret society of barnacles beneath the briny waves, there exists a coveted accolade known as the 'Honorary Barnacle Badge.' Bestowed upon sailors who've shown exceptional skill in befriending their crustaceous brethren, this badge is rumored to grant its recipients honorary citizenship in the barnacle community, complete with the perks of oceanic gossip and exclusive access to the finest barnacle banquets.",
    type: "Barnacle Badge",
    id: "05L"
  },
  {
    obtainText: "You snatched an incredibly rare Siren Scale! ...Slimy.",
    itemDescription: " Crafted from the shimmering iridescence of mermaid scales and imbued with the haunting melodies of the deep sea, this irreplaceable artifact glows with an alluring luminescence that dances across its surface.",
    type: "Siren's Scale",
    id: "06L"
  }
]