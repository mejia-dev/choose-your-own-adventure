export const dungeonData = [
  {
    name: "Bumbling Barnacle",
    choiceArray: ["01C", "02C"],
    enemies: 1,
    loot: 1,
    descriptionText: "A ship with a crew that tends to attract barnacles both on the ship's hull and as quirky sidekicks.",
    storyText: "",
    id: "01D"
  },
  {
    name: "Groggy Galleon",
    choiceArray: ["03C", "04C"],
    enemies: 2,
    loot: 2,
    descriptionText: "A ship known for its crew's love of grog and their tendency to stumble around the deck.",
    storyText: "Arrr, ye be newly docked on the ship, and the air be thick with tension. Do ye reckon it's time to stir the crew to a spirited mutiny, or perhaps call for a grand grog-tastin' gala to lift the spirits and drown the troubles in a sea of merriment? Yarrr, what say ye, me heartie? A mutiny under the Jolly Roger or a grog-soaked revelry to lighten the mood? Choose wisely, for the winds of fate be blowin' strong!",
    id: "02D"
  },
  {
    name: "Jolly Jellyfish",
    choiceArray: ["05C", "06C"],
    enemies: 3,
    loot: 3,
    descriptionText: "A brightly colored ship with a crew that enjoys dancing like jellyfish when celebrating their victories.",
    storyText: "",
    id: "03D"
  }
]

export const choiceData = [
  {
    text: "",
    buttonText: "",
    resultText: "",
     // do something
    id: "01C"
  },
  {
    text: "",
    buttonText: "",
    resultText: "",
     // do something
    id: "02C" 
  },
  {
    name: "Grog Tasting Gala",
    buttonText: "Throw a gala",
    resultText: "As the first drops of grog touch the lips, the crew's spirits be lifted higher than the crow's nest. Sea shanties echo across the deck, and salty tales grow taller with every sip. The ship becomes a dance floor, with sailors stompin' and jiggin' like they've struck gold on a deserted island. In the glow of lantern light, alliances form over shared laughter and the clinkin' of tankards. The captain, pleased with the crew's newfound camaraderie, may even join in the festivities, regalin' the crew with tales of legendary pirates and daring escapades.",
     // obtain rum
    id: "03C"
  },
  {
    name: "MUTINY!",
    buttonText: "Start a mutiny",
    resultText: "Avast, me heartie! The die be cast, and the shadows of mutiny have danced upon the decks. The conspirators, led by none other than yerself, rallied the disgruntled souls seekin' change in the ship's command. A clandestine coup unfolded, with coded messages passin' like ghostly whispers in the salty breeze. The Jolly Roger, once under the dominion of the former captain, now flies in the wind, symbolizin' a shift in leadership. As the tides of mutiny rolled forth, the captain, caught unawares or perhaps suspectin' the treacherous turn, faced a fate as unpredictable as the open sea. The victorious crew, with a new captain at the helm, set their sights on uncharted waters, their destinies interwoven with the whims of the fickle ocean.",
     // obtain captain's hat
    id: "04C"
  },
  {
    text: "",
    buttonText: "",
    resultText: "",
     // do something
    id: "05C"
  },
  {
    text: "",
    buttonText: "",
    resultText: "",
     // do something
    id: "06C"
  },
]

export const enemiesData = [
  {
    type: "Rum-soaked Skeleton",
    description: "Skeletons who have spent a bit too much time at the bottom of the sea. Instead of being menacing, they might be more concerned about finding their missing bones.",
    health: 0,
    strength: 0,
    defense: 0,
    id: "01E"
  },
  {
    type: "Soggy Sea Siren",
    description: "Mermaids who sing terribly off-key, causing confusion and disarray among the crew. They may also attack with soggy seaweed lassos.",
    health: 0,
    strength: 0,
    defense: 0,
    id: "02E"
  },
  {
    type: "Octopirate",
    description: "Pirates with octopus tentacles for legs, making them adept at slipping and sliding across the ship's deck. They might attack by squirting ink or giving unsuspecting hugs with their tentacles.",
    health: 0,
    strength: 0,
    defense: 0,
    id: "03E"
  },
]

export const lootData = [
  {
    obtainText: "Yum! You have found some Rum!",
    itemDescription: "Sip this seafarer's delight and let the echoes of distant waves whisk you away to the heart of the open ocean.",
    type: "Rum",
    health: 10,
    id: "01L"
  },
  {
    obtainText: "You found an orange!",
    itemDescription: "Picture this: ye spy an unsuspecting foe on the deck, and with the precision of a skilled marksman, ye whip out the orange. It's like holdin' a hand grenade, but instead of a blast, ye unleash a volley of juicy chaos! A direct hit can blind a scurvy-ridden scallywag or leave 'em sticky as a bilge rat caught in the grog barrel.",
    type: "Orange",
    strength: 0,
    id: "02L"
  },
  {
    obtainText: "Lucky you- you found doubloons!",
    itemDescription: "Picture this: big, chunky coins with kings and queens squintin' at each other on either side like they just heard the juiciest gossip. Pirates would be plunderin' ships left and right, lookin' for chests filled with these golden disco discs. 'Twas like the pirates had their own version of pirate bling – doubloons that said, 'I'm a swashbucklin' superstar on the high seas!'",
    type: "Doubloons",
    money: 5,
    id: "03L"
  },
]